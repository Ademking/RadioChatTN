import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,  private socialSharing: SocialSharing) {

  }

  fb_share(){
    this.socialSharing.shareViaFacebook("Download RadioChatTN : https://goo.gl/iDTaou", "https://i.imgur.com/PTgqQ8k.png", "https://play.google.com/store/apps/details?id=com.ademkk.radiochattn").then(() => {
      console.log("shareViaFacebook: Success");
    }).catch(() => {
      window.open("https://www.facebook.com/sharer/sharer.php?u=https%3A//play.google.com/store/apps/details?id=com.ademkk.radiochattn",'_system', 'location=yes');
      console.error("shareViaFacebook: failed");
    });
  }

  sms_share(){
    this.socialSharing.shareViaSMS("Download RadioChatTN Now! https://goo.gl/iDTaou", "").then(() => {
      console.log("shareViaSMS: Success");
    }).catch(() => {
      console.error("shareViaSMS: failed");
    });
  }

  twitter_share(){
    this.socialSharing.shareViaTwitter("Download RadioChatTN : https://goo.gl/iDTaou", "https://i.imgur.com/PTgqQ8k.png", "https://play.google.com/store/apps/details?id=com.ademkk.radiochattn").then(() => {
      console.log("shareViaFacebook: Success");
    }).catch(() => {
      window.open("https://twitter.com/home?status=https%3A//play.google.com/store/apps/details?id=com.ademkk.radiochattn",'_system', 'location=yes');
      console.error("shareViaFacebook: failed");
    });
  }

  instagram_share(){
    this.socialSharing.shareViaInstagram("Download RadioChatTN Now! https://goo.gl/iDTaou", "https://i.imgur.com/LKg8EDB.png").then(() => {
      console.log("shareViaSMS: Success");
    }).catch(() => {
      console.error("shareViaSMS: failed");
    });
  }

  rateus(){
    window.open("https://play.google.com/store/apps/details?id=com.ademkk.radiochattn",'_system', 'location=yes');
  }


}
