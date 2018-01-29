import {Component} from '@angular/core';
import {NavController, ModalController, NavParams, ViewController} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {BarcodeScanner, BarcodeScannerOptions} from "@ionic-native/barcode-scanner";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  qrData = null;
  createdCode = null;
  scannedCode = null;
  options: BarcodeScannerOptions;

  constructor(public navCtrl: NavController,
              private barcodeScanner: BarcodeScanner,
              public modalCtrl: ModalController) {

  }

  logout() {
    this.navCtrl.push(LoginPage);
  }

  createCode() {
    // this.createdCode = this.qrData;
    this.createdCode = JSON.stringify({name: '质量管理', version: '版本'});
    let profileModal = this.modalCtrl.create(ShowQRCode, {createdCode: this.createdCode});
    profileModal.present();
  }

  scanCode() {
    this.options = {
      prompt: 'Please scan your code'
    };

    this.barcodeScanner.scan(this.options).then(barcodeData => {
      console.log(barcodeData);
      this.scannedCode = barcodeData;
    })
  }
}

@Component({
  selector: 'show-qr-code',
  template: `
<ion-header>
  <ion-navbar>
    <ion-title>
    二维码
    </ion-title>
  </ion-navbar>
</ion-header>
<ion-content>
      <ngx-qrcode [qrc-value]="createdCode"></ngx-qrcode>
</ion-content>
`
})

export class ShowQRCode {
  createdCode: string;

  constructor(public navParams: NavParams, private viewCtrl: ViewController) {
    this.createdCode = this.navParams.get('createdCode');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
