import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
  name1: string = '清西大桥土建B标检查通知';
  name2: string = '新疆项目整改通知';
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }

  reivewDetail(name, detail){
    let alert = this.alertCtrl.create({
      title: name,
      subTitle: detail
    });
    alert.present();
  }

}
