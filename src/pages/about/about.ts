import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  name = 'strawberry';

  constructor(public navCtrl: NavController) {

  }

  upload(data) {
    console.log(data);
  }

}
