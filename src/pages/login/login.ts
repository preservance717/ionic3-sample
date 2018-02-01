import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {AbstractControl, FormGroup, Validators, FormBuilder} from "@angular/forms";
import {loginService} from "./login.service";
import {File} from '@ionic-native/file';
import {AppService} from "../../app/app.service";
import {SQLiteObject, SQLite} from "@ionic-native/sqlite";
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
  showdata: any = 'init';
  locat: any = 'dizhi';
  direxist: any;
  dirPath:any;
  errorInfo1:any;
  errorInfo2:any;
  slideImages: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private fb: FormBuilder,
              private _service: loginService,
              private sqlite: SQLite,
              private toastCtrl: ToastController,
              private file: File,
              private globalService:GlobalService) {

    this.slideImages = [
      {src: './assets/imgs/guide/zhi.png'},
      {src: './assets/imgs/guide/quality.png'},
      {src: './assets/imgs/guide/jiankong.png'},
      {src: './assets/imgs/guide/gx.png'},
      {src: './assets/imgs/guide/bhz.png'}
    ]

    // this.file.createDir(this.file.externalRootDirectory, 'mydir', true).
    // then(_ =>console.log('Directory exists')).
    // catch(err => console.log('Directory doesnt exist'));
  }



  ionViewDidLoad() {
    // this.file.createDir(this.file.externalRootDirectory, '111quality', true)
    //   .then(data=> {this.location = data.fullPath+'111quality'
    //     this.showdata = '1111quality';
    //   }, err=>{
    //     this.showdata = 'error%%%%%%%%%%%%%%%%%';
    //     console.log(err);});
    // .catch(err => console.log('create failly'));
    // this.createDirectory(this.file.externalRootDirectory);


    this.file.createDir(this.file.externalRootDirectory, '11111mydir', true).then(data => {
      console.log('Directory exists');
      this.dirPath = data.fullPath;
      // this.showdata = "11111111111111111";
      this.file.createDir(`${this.file.externalRootDirectory}${data.fullPath}`, 'db', true).then(path => {
        this.sqlite.create({
          name: 'quality.db',
          location: `${this.file.externalRootDirectory}${path.fullPath}`
        }).then((db: SQLiteObject) => {
          // this.location = location;
          db.executeSql('create table q_user(name VARCHAR(32))', {})
            .then(() => console.log('Executed SQL'))
            .catch(e => {
              console.log(e)
              this.errorInfo2 = e;
            });
        }).catch(e => {
          console.log(e)
          this.errorInfo1 = e;
        });

        // this.initDB(`${this.file.externalRootDirectory}${path.fullPath}`);
      }, err => {
      });
    }).catch(err => console.log('Directory doesnt exist'));

    this.buildForm();

  }

  initDB(location) {
    this.sqlite.create({
      name: 'quality.db',
      location: location
    }).then((db: SQLiteObject) => {
      // this.location = location;
      db.executeSql('create table q_user(name VARCHAR(32))', {})
        .then(() => console.log('Executed SQL'))
        .catch(e => {
          console.log(e)
          this.errorInfo2 = e;
        });
    }).catch(e => {
      console.log(e)
      this.errorInfo1 = e;
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
    this.globalService.presentLoading(0,"正在登陆...",1000);
    this.login();
  }
  login() {

    this.navCtrl.push(TabsPage)
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
