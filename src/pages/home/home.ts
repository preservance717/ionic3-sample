import { Component } from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {CheckPage} from "../check/check";
import {HomeService} from "./home.service";
import { LocationTrackerProvider } from '../../providers/location-tracker/location-tracker';
import {GlobalService} from "../../app/global.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[HomeService]
})
export class HomePage {
  name = '云';
  constructor(public navCtrl: NavController,
              private _service:HomeService,
              public modalCtrl: ModalController,public locationTracker: LocationTrackerProvider,private globalService:GlobalService) {

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
    this.globalService.presentLoading(0,"正在加载...",1000);
    // this.navCtrl.push(CheckPage)
    let modal = this.modalCtrl.create(CheckPage, project);
    modal.present();
    //开启定位巡查
    this.startTracker();
  }

}
