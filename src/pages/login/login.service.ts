/**
 * Created by gaole on 2018/1/22.
 */
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/toPromise'

@Injectable()
export class loginService {
  loginUrl = 'http://hseq.ccccltd.cn/SafetyMonitor/awards/mobile/loginFree.do';
  constructor(private http:HttpClient) {

  }

  login(username:any):Promise<any>{
    let loginUrl = `${this.loginUrl}?userid=${username}`;

    return this.http.get(loginUrl).toPromise()
      .then(response => response)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    // console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
