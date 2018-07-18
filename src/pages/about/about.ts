import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavController,NavParams, CardContent } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

import { StreamingMedia , StreamingAudioOptions } from '@ionic-native/streaming-media';
import { Media, MediaObject } from '@ionic-native/media';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutPage {


  private file: MediaObject;
  name = "";
  btncolor = "";
  stat: any;
  actual_url: any;
  url_radios = {
    mosaiquefm : "http://radio.mosaiquefm.net:8000/mosalive",
    shemsfm : "http://stream6.tanitweb.com/shems",
    ifm: "http://ifm.tn:8000/direct",
    rnatfm : "http://rtstream.tanitweb.com/nationale",
    rjeune: "http://rtstream.tanitweb.com/jeunes" ,
    jawharafm : "http://streaming2.toutech.net:8000/jawharafm",
    expressfm : "http://expressfm.ice.infomaniak.ch/expressfm-64.mp3",
    zitounafm : "http://stream8.tanitweb.com/zitounafm",
    panoramafm : "http://listen.shoutcast.com/panoramatunis",
    diwanfm : "http://stream8.tanitweb.com/diwanfm",
    knoozfm : "http://streaming.knoozfm.net:8000/knoozfm",
    rtci : "http://rtstream.tanitweb.com/rtci" ,
    oxygenefm : "http://radiooxygenefm.ice.infomaniak.ch/radiooxygenefm-64.mp3"
  };
  username: any;

  constructor(public navCtrl: NavController,
     private navParams: NavParams,
     public sanitizer: DomSanitizer,
     private streamingMedia: StreamingMedia,
     private media: Media) {

    //get the name of page from card in welcome
    this.name = navParams.get('name');
    this.username = navParams.get('username');

    this.make_actual_url(this.name);





      // for audio ...
    this.playAudio(this.actual_url);
    this.file.onStatusUpdate.subscribe(status =>  { console.log(status); });

  }


  make_actual_url(name:string) {

    if (name == 'Mosaique FM')
    {
      this.actual_url = this.url_radios.mosaiquefm;
      this.btncolor = "red";
    }


    else if (this.name === 'Shems FM')
    {
      this.actual_url = this.url_radios.shemsfm;
      this.btncolor = "yellow";
    }

    else if (this.name === 'IFM')
    {
    this.actual_url = this.url_radios.ifm;
    this.btncolor = "blue";
    }

    else if (this.name === 'Radio Nationnal')
    {
    this.actual_url = this.url_radios.rnatfm;
    this.btncolor = "red";
    }

    else if (this.name === 'Radio Jeunes')
    {
    this.actual_url = this.url_radios.rjeune;
    this.btncolor = "yellow";
    }

    else if (this.name === "Jawhara FM")
    {
    this.actual_url = this.url_radios.jawharafm;
    this.btncolor = "blue";
    }

    else if (this.name === "Express FM")
    {
    this.actual_url = this.url_radios.expressfm;
    this.btncolor = "blue";
    }

    else if (this.name === "Zitouna FM")
    {
    this.actual_url = this.url_radios.zitounafm;
    this.btncolor = "green";
    }

    else if (this.name === "Panorama FM")
    {
    this.actual_url = this.url_radios.panoramafm;
    this.btncolor = "green";
    }


    else if (this.name === "Diwan FM")
    {
    this.actual_url = this.url_radios.diwanfm;
    this.btncolor = "blue";
    }

    else if (this.name === "Knooz FM")
    {
    this.actual_url = this.url_radios.knoozfm;
    this.btncolor = "yellow";
    }


    else if (this.name === "RTCI")
    {
    this.actual_url = this.url_radios.rtci;
    this.btncolor = "pink";
    }

    else if (this.name === "Oxygene FM")
    {
    this.actual_url = this.url_radios.oxygenefm;
    this.btncolor = "blue";
    }

    /** add here if you want to add a new radio channel  */




    else
    {
      this.actual_url =  this.url_radios.mosaiquefm;
      this.btncolor = "red";
    }

  }



  playAudio(audiourl: string){
    if (this.file) {
        this.file.stop();
        this.file.release();
    }
    this.file = this.media.create(audiourl);
    this.file.play();
    this.stat = "Playing";

  }

  stopAudio(){
    this.file.stop();
    this.file.release();
    this.stat = "Stopped";
  }


  ionViewWillLeave() {
    this.stopAudio();
  }





  iframeURL() {

      let chatroom_name = "RadioChat";

      if (this.name == 'Mosaique FM')
      chatroom_name = 'mosaiquefm';

      else if (this.name === 'Shems FM')
      chatroom_name = 'shemsfm';

      else if (this.name === 'IFM')
      chatroom_name = 'ifm';

      else if (this.name === 'Radio Nationnal')
      chatroom_name = 'radioNat';

      else if (this.name === 'Radio Jeunes')
      chatroom_name = 'radiojeunes';

      else if (this.name === 'Jawhara FM')
      chatroom_name = 'jawharafm';

      else if (this.name === 'Express FM')
      chatroom_name = 'expressfm';

      else if (this.name === 'Zitouna FM')
      chatroom_name = 'zitounafm';

      else if (this.name === 'Panorama FM')
      chatroom_name = 'panoramafm';

      else if (this.name === 'Diwan FM')
      chatroom_name = 'diwanfm';

      else if (this.name === 'Knooz FM')
      chatroom_name = 'knoozfm';

      else if (this.name === 'RTCI')
      chatroom_name = 'rtci';

      else if (this.name === 'Oxygene FM')
      chatroom_name = 'oxygenefm';

      /** add a new condition [Here] if you want to add a new Radio Channel  */
      /** see home.ts */

      else
      chatroom_name = 'radiotn';


      let myurl  = 'https://embed.tlk.io/' + chatroom_name + '?custom_css_path=' + this.css_url(this.btncolor) + '.css&theme=theme--day&nickname=' + this.username;
      return this.sanitizer.bypassSecurityTrustResourceUrl(myurl);

  }

  takeMeBack() {
    this.navCtrl.parent.select(0);
  }

  /** helper function */
  css_url(color) {
    if (color == 'red') {
      return "https://cdn.rawgit.com/Ademking/c3012da4f7309fa6d70e56f5a013360f/raw/be0fc90e30f737db47cc465ca73f4498f489754e/red.css";
    }
    else if (color == 'yellow') {
      return "https://cdn.rawgit.com/Ademking/9772b005d1fe7b031bf0a616f78043ca/raw/e58497d347d6570546c17fabe23f975ff5dc1ef0/yellow.css";
    }
    else if (color == 'green') {
      return "https://cdn.rawgit.com/Ademking/87c830ad2466d162abf43ca4eb1cfc7a/raw/c8a46d2d712524ec6d98e5c453a9914d40d91fb8/green.css";
    }
    else if (color == 'blue') {
      return "https://cdn.rawgit.com/Ademking/f7482d49a2b813cbb123b5642edec2ff/raw/b1f303108e8844e6ea6f342e42836ad722244370/blue.css";
    }
    else if (color == 'pink') {
      return "https://cdn.rawgit.com/Ademking/ef167c05470cd2debb8a69811b45f5d8/raw/4e7a51f13288c9b5ad99201aad14bc8b59ef03b1/pink.css";
    }
    else {
      return "https://cdn.rawgit.com/Ademking/c3012da4f7309fa6d70e56f5a013360f/raw/be0fc90e30f737db47cc465ca73f4498f489754e/red.css";
    }

  }

}
