import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {LocalNotifications} from '@ionic-native/local-notifications';
// import {QRScanner, QRScannerStatus} from "@ionic-native/qr-scanner";
import {BarcodeScanner, BarcodeScannerOptions} from "@ionic-native/barcode-scanner";
import {GlobalService} from "../../app/global.service";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  name = 'strawberry';
  constructor(public navCtrl: NavController,
              private globalService: GlobalService,
              // private qrScanner: QRScanner,
              ) {}

  upload(data) {
    console.log(data);
    this.globalService.notificationShow(0,"任务上传","巡检任务上传成功！");
  }
}
