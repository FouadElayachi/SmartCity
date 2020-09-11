import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

	tab1Root = 'ItinerairePage';
	tab2Root = 'MapsPage';
	tab3Root = 'ActualitePage';
	tab4Root = 'AproposPage';
	myIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.myIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
