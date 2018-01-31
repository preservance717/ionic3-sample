import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {CheckPage} from "../check/check";
import {HomeService} from "./home.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService]
})
export class HomePage {
  name = '云南华丽高速22合同段';
  pet: string = "puppies";

  constructor(public navCtrl: NavController,
              private _service: HomeService,
              public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    // this.getList();
  }

  getList() {
    this._service.getList().then(
      res => {
        console.log("res", res);
      }
    )
  }

  start(project) {
    // this.navCtrl.push(CheckPage)
    let modal = this.modalCtrl.create(CheckPage, project);
    modal.present();
  }

  public doughnutChartLabels: string[] = ['未使用', '完成', '使用中'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: string = 'doughnut';
  public doughnutChartOptions: any = {
    // responsive: true,
  };

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: '总盘数'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: '超标率'}
  ];
  public barChartColors: any[] = [
    { // grey
      backgroundColor: 'rgba(0,255,0,1)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(0,0,255,0.9)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ]
  public doughnutChartColors: any[] = [
    {backgroundColor: ["#b8436d", "#00d9f9", "#a4c73c"]}
  ]
// events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

}
