import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, FabContainer } from 'ionic-angular';

/**
 * Generated class for the AproposPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apropos',
  templateUrl: 'apropos.html',
})
export class AproposPage {

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AproposPage');
  }

}
