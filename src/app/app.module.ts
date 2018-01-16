import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { HttpModule } from '@angular/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

import {Toast} from "@ionic-native/toast";
import {Network} from "@ionic-native/network";
import {CallNumber} from "@ionic-native/call-number";
import { ApiService } from '../providers/api-service';
import { NativeService } from '../providers/NativeService';
import { UserService } from '../services/user-service';
import { GlobalData } from '../providers/GlobalData';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      mode: 'ios',
      backButtonText: '',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Toast,
    Network,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiService,
    NativeService,
    UserService,
    GlobalData,
  ]
})
export class AppModule {}
