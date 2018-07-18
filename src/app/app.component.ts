import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { AlertController  } from 'ionic-angular';


import { TabsPage } from '../pages/tabs/tabs';
import { WelcomeSlidePage } from '../pages/welcome-slide/welcome-slide';
import { ErrorPage } from '../pages/error/error';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = TabsPage;
  loader: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public loadingCtrl: LoadingController, public storage: Storage, private network: Network, private alertCtrl: AlertController)
  {

          this.presentLoading();

          platform.ready().then(() => {
            this.listenConnection();

            this.storage.get('introShown').then((result) => {

              if(result){
                this.rootPage = TabsPage;
              } else {
                this.rootPage = WelcomeSlidePage;
                this.storage.set('introShown', true);
              }

              this.loader.dismiss();

            });

            statusBar.styleDefault();
            splashScreen.hide();


          });

  }

  presentLoading() {

    this.loader = this.loadingCtrl.create({
      content: "Loading..."
    });

    this.loader.present();

  }




  private listenConnection(): void {
    this.network.onDisconnect()
      .subscribe(() => {
        //when no internet connection do :
        this.redirect2error();
      });
  }

  private redirect2error(): void {
    this.nav.push(ErrorPage);
  }



}
