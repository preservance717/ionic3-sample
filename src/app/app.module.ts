import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {AboutPage} from '../pages/about/about';
import {ContactPage, ShowQRCode} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";

import {CheckPage} from "../pages/check/check";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgaModule} from "../theme/nga.module";

import {Camera} from '@ionic-native/camera';
import {IonicImageViewerModule} from "ionic-img-viewer";
import { LocalNotifications } from '@ionic-native/local-notifications';

import {PopoverPage} from "../pages/popover/popover";
import {NgxQRCodeModule} from "@techiediaries/ngx-qrcode";
// import {QRScanner} from "@ionic-native/qr-scanner";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    CheckPage,
    PopoverPage,
    ShowQRCode
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule,
    NgxQRCodeModule,
    NgaModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    CheckPage,
    PopoverPage,
    ShowQRCode
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClientModule,
    Camera,
    LocalNotifications,
    // QRScanner,
    BarcodeScanner
  ]
})
export class AppModule {
}
