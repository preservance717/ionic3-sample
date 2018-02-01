import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {AbstractControl, FormGroup, Validators, FormBuilder} from "@angular/forms";
import {loginService} from "./login.service";
import {File} from '@ionic-native/file';
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

  slideImages: any;

  shouldScroll: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private fb: FormBuilder,
              private _service: loginService,
              private toastCtrl: ToastController, private file: File,private globalService:GlobalService) {

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
    console.log('ionViewDidLoad LoginPage');
    this.buildForm();

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
