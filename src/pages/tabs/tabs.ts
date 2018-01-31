import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LocationTrackerProvider } from '../../providers/location-tracker/location-tracker';
import {GuidePage} from "../guide/guide";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = GuidePage;

  constructor(public locationTracker: LocationTrackerProvider) {
    //this.start();
  }
  start(){
    console.log("//开启定位巡查服务");
    this.locationTracker.startTracking();
  }

  stop(){
    console.log("//关闭定位巡查服务");
    this.locationTracker.stopTracking();
  }

}
