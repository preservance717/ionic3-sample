/**
 * Created by gospel on 2018/1/31.
 */
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise'
import {LoadingController} from "ionic-angular";
import {LocalNotifications} from "@ionic-native/local-notifications";

@Injectable()
export class GlobalService {
  constructor(private loadingCtrl: LoadingController, private localNotifications: LocalNotifications) {

  }

  /**
   * 加载框
   * @param type
   * @param text
   * @param duration
   */
  presentLoading(type, text, duration) {
    let loader = this.loadingCtrl.create({
      content: text,
      duration: duration
    });
    loader.present();
  }

  /**
   * 通知
   * @param type
   * @param title
   * @param text
   */
  notificationShow(type, title, text) {
    this.localNotifications.schedule({
      id: 1,
      title: title,
      text: text
    });
  }

  private handleError(error: any): Promise<any> {
    // console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
