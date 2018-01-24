/**
 * Created by gaole on 2018/1/24.
 */
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/toPromise'

@Injectable()
export class CheckService {
  checkUrl = '';
  constructor(private http:HttpClient) {

  }

  checkInfo(params:any):Promise<any>{

    return this.http.post(this.checkUrl, params).toPromise()
      .then(response => response)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    // console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
