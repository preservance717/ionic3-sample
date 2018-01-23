import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CheckPage} from "../check/check";
import {HomeService} from "./home.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[HomeService]
})
export class HomePage {
  name = 'woody';
  constructor(public navCtrl: NavController, private _service:HomeService) {

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

  start(){
    this.navCtrl.push(CheckPage)
  }

}
