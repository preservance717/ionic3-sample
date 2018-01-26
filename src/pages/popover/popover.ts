/**
 * Created by gaole on 2018/1/25.
 */
import {Component} from '@angular/core';
import {ViewController} from "ionic-angular";

/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {
  gender: string;
  toppings: any;

  constructor(public viewCtrl: ViewController) {
  }

  onSubmit() {
    this.viewCtrl.dismiss({'gender': this.gender, toppings: this.toppings});
  }
}
