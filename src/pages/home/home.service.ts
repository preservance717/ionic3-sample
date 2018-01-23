/**
 * Created by gaole on 2018/1/22.
 */
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/toPromise'

@Injectable()
export class HomeService {
  todoListUrl = 'http://hseq.ccccltd.cn/SafetyMonitor/ms/tabulatestatistics/toMobileWeeklyReports.bo?beginTime=2018-01-15&endTime=2018-01-21';
  constructor(private http:HttpClient) {

  }

  getList():Promise<any>{

    return this.http.get(this.todoListUrl).toPromise()
      .then(response => response)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    // console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
