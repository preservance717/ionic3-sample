import {Component} from '@angular/core';
import {
  IonicPage, NavController, NavParams, ActionSheetController, Platform, ViewController,
  PopoverController
} from 'ionic-angular';
import {Camera, CameraOptions} from "@ionic-native/camera";
import {Validators, AbstractControl, FormGroup, FormBuilder} from "@angular/forms";
import {CheckService} from "./check.service";
import {PopoverPage} from "../popover/popover";

/**
 * Generated class for the CheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-check',
  templateUrl: 'check.html',
  providers: [CheckService]
})
export class CheckPage {
  images: Array<{src: String}> = [];
  bigImageSrc: string = '';
  projectName: string = '';

  name: AbstractControl;
  detail: AbstractControl;
  checkForm: FormGroup;
  checkParams: any;
  checkContent: any;
  checkContentKeys: any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public actionsheetCtrl: ActionSheetController,
              public platform: Platform,
              private camera: Camera,
              public viewCtrl: ViewController,
              private fb: FormBuilder,
              private _service: CheckService,
              public popoverCtrl: PopoverController) {
    this.projectName = this.navParams.get('name');
  }

  ionViewWillEnter() {
    this.buildForm();
  }

  buildForm() {
    this.checkForm = this.fb.group({
      'name': [this.projectName, Validators.compose([Validators.required])],
      'detail': ['', Validators.compose([Validators.required])]
    });

    this.name = this.checkForm.controls['name'];
    this.detail = this.checkForm.controls['detail'];
  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: '选择',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: '相机',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            this.openCamera();
          }
        },
        {
          text: '相册',
          icon: !this.platform.is('ios') ? 'images' : null,
          handler: () => {
            this.openFilePicker();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  openCamera() {
    var srcType = this.camera.PictureSourceType.CAMERA;
    var options = this.setOptions(srcType);

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.images.unshift({
        src: base64Image
      })
    }, (err) => {
      console.log(err);
    }).catch((err) => {
      console.log("err", err);
    })
  }

  openFilePicker() {
    var srcType = this.camera.PictureSourceType.SAVEDPHOTOALBUM;
    var options = this.setOptions(srcType);

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.images.unshift({
        src: base64Image
      })
    }, (err) => {
      console.log(err);
    }).catch((err) => {
      console.log("err", err);
    })
  }

  setOptions(srcType) {
    const options: CameraOptions = {
      // Some common settings are 20, 50, and 100
      quality: 20,
      destinationType: this.camera.DestinationType.DATA_URL,
      // In this app, dynamically set the picture source, Camera or photo gallery
      sourceType: srcType,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,  //Corrects Android orientation quirks
      saveToPhotoAlbum: true,
    };
    return options;
  }

  deleteImg(src) {
    console.log("old", this.images.length);

    this.images = this.images.filter(image => image.src != src);
    this.images.slice(this.images.indexOf(src), 1);
    console.log("now", this.images.length);
    // this.images
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
    popover.onDidDismiss(data => {
      this.checkContent = data;
      this.checkContentKeys = Object.keys(this.checkContent);
    })
  }

  isArray(data) {
    if (typeof data == 'object') {
      return true;
    }

    return false;
  }

  goBack() {
    // this.navCtrl.pop();
    this.viewCtrl.dismiss();
  }

  dismiss() {
    // this.checkParams = Object.assign(this.checkParams, {images: this.images, checkContent:this.checkContent});
    console.log("value", this.checkParams);
    // this._service.checkInfo(this.checkParams).then(res=>{
    //
    // })
    this.viewCtrl.dismiss();
  }
}
