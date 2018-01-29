import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {LocalNotifications} from '@ionic-native/local-notifications';
// import {QRScanner, QRScannerStatus} from "@ionic-native/qr-scanner";
import {BarcodeScanner, BarcodeScannerOptions} from "@ionic-native/barcode-scanner";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  name = 'strawberry';
  constructor(public navCtrl: NavController,
              private localNotifications: LocalNotifications,
              // private qrScanner: QRScanner,
              ) {}

  upload(data) {
    console.log(data);
    this.localNotifications.schedule({
      id: 1,
      title: '文件上传成功',
      text: '点击查看更过选项',
    });
  }
}
