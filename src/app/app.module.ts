import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, NavController } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { ErrorPage } from '../pages/error/error';
import { TabsPage } from '../pages/tabs/tabs';
import { ReportPage } from '../pages/report/report';
import { WelcomeSlidePage } from '../pages/welcome-slide/welcome-slide';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StreamingMedia } from '@ionic-native/streaming-media';
import { Media } from '@ionic-native/media';
import { IonicStorageModule } from '@ionic/storage';
import { Network } from '@ionic-native/network';
import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,



    //WelcomeSlidePage,
    //SettingsPage,
    //ErrorPage,
    //ReportPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SettingsPage,
    ErrorPage,
    WelcomeSlidePage,
    ReportPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StreamingMedia,
    Media,
    IonicStorageModule,
    Network,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
