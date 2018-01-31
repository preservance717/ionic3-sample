import { Component } from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {CheckPage} from "../check/check";
import {HomeService} from "./home.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[HomeService]
})
export class HomePage {
  name = '云南华丽高速22合同段';
  constructor(public navCtrl: NavController,
              private _service:HomeService,
              public modalCtrl: ModalController) {

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
  }

}
