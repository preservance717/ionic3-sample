import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController, Platform} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {AbstractControl, FormGroup, Validators, FormBuilder} from "@angular/forms";
import {loginService} from "./login.service";
import {File} from '@ionic-native/file';
import {AppService} from "../../app/app.service";
import {SQLiteObject, SQLite, SQLiteDatabaseConfig} from "@ionic-native/sqlite";
import {GlobalService} from "../../app/global.service";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [loginService]
})
export class LoginPage {
  username: AbstractControl;
  password: AbstractControl;
  loginForm: FormGroup;

  shouldScroll: boolean = false;
  showdata: any;
  locat: any ;
  direxist: any;
  dirPath: any;
  errorInfo1: any;
  errorInfo2: any;
  slideImages: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private fb: FormBuilder,
              private _service: loginService,
              private sqlite: SQLite,
              private toastCtrl: ToastController,
              private file: File,
              private globalService: GlobalService,
              private platform: Platform) {

    this.slideImages = [
      {src: './assets/imgs/guide/zhi.png'},
      {src: './assets/imgs/guide/quality.png'},
      {src: './assets/imgs/guide/jiankong.png'},
      {src: './assets/imgs/guide/gx.png'},
      {src: './assets/imgs/guide/bhz.png'}
    ]
  }

  ionViewDidLoad() {
    this.file.createDir(this.file.externalRootDirectory, '11111mydir', true).then(data => {
      console.log('Directory exists');

      this.dirPath = data.fullPath;
      this.file.createDir(`${this.file.externalRootDirectory}${data.fullPath}`, 'db', true).then(path => {
      }, err => {
      });
    }).catch(err => console.log('Directory doesnt exist'));

    this.buildForm();
  }

  ionViewWillEnter(){
    this.initDB();
  }

  initDB() {
    this.sqlite.create({
      name: 'quality.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      // this.location = location;
      db.executeSql('create table q_user(id INTEGER PRIMARY KEY, username VARCHAR(32), password VARCHAR(32))', {})
        .then(() => console.log('Executed SQL'))
        .catch(e => {
          console.log(e)
        });
      db.executeSql('INSERT INTO q_user VALUES(NULL,?,?)', ["gaole", "123456"]).then(res=>{
      }).catch(err=>{
      })

    }).catch(e => {
      console.log(e)
    });
  }


  buildForm() {
    this.loginForm = this.fb.group({
      'username': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required])]
    });
    ''
    this.username = this.loginForm.controls['username'];
    this.password = this.loginForm.controls['password'];
  }

  loginbefor() {
    this.globalService.presentLoading(0, "正在登陆...", 1000);
    this.login();
  }

  login() {

    this.sqlite.create({
      name: 'quality.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      // this.location = location;
      db.executeSql('SELECT * from q_user where username=?', [this.loginForm.value.username])
        .then((res) =>{
        if(res.rows.item(0).password == this.loginForm.value.password){
          this.navCtrl.push(TabsPage);
        }else {
          this.locat = Object.keys(res.rows);
          this.showdata = Object.keys(this.locat);
        }
        })
        .catch(e => {
          console.log(e)
        });
    }).catch(e => {
      console.log(e)
    });
    // this._service.login(this.loginForm.value.username)
    //   .then(res => {
    //     if(res&&res.success){
    //       this.navCtrl.push(TabsPage)
    //     }else {
    //       let toast = this.toastCtrl.create({
    //         message: '用户名或密码不正确',
    //         duration: 3000,
    //         position: 'middle'
    //       });
    //
    //       toast.present(toast);
    //     }
    //   });
  }
}
