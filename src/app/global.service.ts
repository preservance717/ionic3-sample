/**
 * Created by gospel on 2018/1/31.
 */
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise'
import {LoadingController} from "ionic-angular";

@Injectable()
export class GlobalService {
  constructor(private loadingCtrl:LoadingController) {

  }

  /**
   *
   * @param type
   * @param str
   * @param duration
   */
  presentLoading(type,str,duration) {
    let loader = this.loadingCtrl.create({
      content: str,
      duration: duration
    });
    loader.present();
  }

  private handleError(error: any): Promise<any> {
    // console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
