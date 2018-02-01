import { Component } from '@angular/core';
import { Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {LoginPage} from "../pages/login/login";

import {File} from '@ionic-native/file';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private file: File) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // statusBar.styleDefault();
      // statusBar.backgroundColorByHexString('#ffffff20');
      statusBar.styleLightContent();
      splashScreen.hide();
    });

    this.file.createDir(this.file.externalRootDirectory, 'myquality', true).
    then(_ =>console.log('Directory exists')).
    catch(err => console.log('Directory doesnt exist'));
  }
}
