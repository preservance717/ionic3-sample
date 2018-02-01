import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, ViewController, ModalController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {MessagePage} from "../message/message";
import {BarcodeScannerOptions, BarcodeScanner} from "@ionic-native/barcode-scanner";
import {GlobalService} from "../../app/global.service";

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
  options: BarcodeScannerOptions;
  scannedCode:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private barcodeScanner: BarcodeScanner,
              public modalCtrl: ModalController,
              private globalService:GlobalService) {
    this.slideImages = [
      {src: './assets/imgs/guide/zhi.png'},
      {src: './assets/imgs/guide/quality.png'},
      {src: './assets/imgs/guide/jiankong.png'}
    ]

    this.appList = [
      {src: './assets/imgs/guide/zhi.png', name: '质检'},
      {src: './assets/imgs/guide/quality.png', name: '质量'},
      {src: './assets/imgs/guide/jiankong.png', name: '监控'},
      {src: './assets/imgs/guide/zhi.png', name: '质检'},
      {src: './assets/imgs/guide/quality.png', name: '质量'},
      {src: './assets/imgs/guide/jiankong.png', name: '监控'},
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuidePage');
  }

  toggle(data){
    this.globalService.presentLoading(0,"正在加载...",1000);

    if(data.name == '质检'){
      this.navCtrl.push(HomePage);
    } else {
      let alert = this.alertCtrl.create({
        subTitle: '开发中。。。。。。',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  openMessage() {
    this.navCtrl.push(MessagePage);
  }

  scanCode() {
    this.options = {
      prompt: 'Please scan your code'
    };

    this.barcodeScanner.scan(this.options).then(barcodeData => {
      console.log(barcodeData);
      this.scannedCode = barcodeData;
      let profileModal = this.modalCtrl.create(ShowScanCode, {scannedCode: this.scannedCode});
      profileModal.present();
    })
  }

}

@Component({
  selector: 'show-scan-code',
  template: `
<ion-header>
  <ion-navbar>
    <ion-title>
    整改通知
    </ion-title>
  </ion-navbar>
</ion-header>
<ion-content>
      <ion-card *ngIf="scannedCode">
      <ion-card-content>
        <p>cancelled: {{scannedCode.cancelled}}</p>
        <p>format: {{scannedCode.format}}</p>
        <p>text: {{scannedCode.text}}</p>
      </ion-card-content>
    </ion-card>
</ion-content>
`
})

export class ShowScanCode {
  scannedCode: string;

  constructor(public navParams: NavParams, private viewCtrl: ViewController) {
    this.scannedCode = this.navParams.get('scannedCode');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
