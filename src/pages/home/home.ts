import { Component } from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {CheckPage} from "../check/check";
import {HomeService} from "./home.service";
import { LocationTrackerProvider } from '../../providers/location-tracker/location-tracker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[HomeService]
})
export class HomePage {
  name = 'woody';
  constructor(public navCtrl: NavController,
              private _service:HomeService,
              public modalCtrl: ModalController,public locationTracker: LocationTrackerProvider) {

  }

  startTracker(){
    console.log("//开启定位巡查服务");
    this.locationTracker.startTracking();
  }

  stopTracker(){
    console.log("//关闭定位巡查服务");
    this.locationTracker.stopTracking();
  }

  ionViewDidLoad() {
    // this.getList();
  }

  getList(){
    this._service.getList().then(
      res=>{
        console.log("res", res);
      }
    )
  }

  start(project){
    // this.navCtrl.push(CheckPage)
    let modal = this.modalCtrl.create(CheckPage, project);
    modal.present();

    this.startTracker();
  }

}
