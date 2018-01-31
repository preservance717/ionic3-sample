import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {HomePage} from "../home/home";

/**
 * Generated class for the GuidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guide',
  templateUrl: 'guide.html',
})
export class GuidePage {
  slideImages: any;
  appList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.slideImages = [
      {src: './assets/imgs/guide/zhi.png'},
      {src: './assets/imgs/guide/quality.png'},
      {src: './assets/imgs/guide/jiankong.png'}
    ]

    this.appList = [
      {src: './assets/imgs/guide/zhi.png', name:'质检'},
      {src: './assets/imgs/guide/quality.png', name:'质量'},
      {src: './assets/imgs/guide/jiankong.png', name:'监控'},
      {src: './assets/imgs/guide/zhi.png', name:'质检'},
      {src: './assets/imgs/guide/quality.png', name:'质量'},
      {src: './assets/imgs/guide/jiankong.png', name:'监控'},
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuidePage');
  }

  toggle(data){
    if(data.name == '质检'){
      this.navCtrl.push(HomePage);
    }else {
      let alert = this.alertCtrl.create({
        subTitle: '开发中。。。。。。',
        buttons: ['OK']
      });
      alert.present();
    }
  }
}
