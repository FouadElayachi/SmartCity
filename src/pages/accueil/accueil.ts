import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

export interface PageInterface {
	title: string;
	pageName: string;
	tabCompoent?: any;
	index?: number;
	icon: string;
}

@IonicPage()
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {

	rootPage = 'TabsPage';

	@ViewChild(Nav) nav: Nav;

	pages: PageInterface[] = [

		{ title: 'Itinéraire', pageName: 'TabsPage', tabCompoent: 'ItinerairePage', index: 0, icon: 'subway'},
		{ title: 'Maps', pageName: 'TabsPage', tabCompoent: 'MapsPage', index: 1, icon: 'map'},
		{ title: 'Actualités', pageName: 'TabsPage', tabCompoent: 'ActualitePage', index: 2, icon: 'paper'},
		{ title: 'A propos', pageName: 'TabsPage', tabCompoent: 'AproposPage', index: 3, icon: 'information-circle'},

	]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPage(page: PageInterface) {
  	let params = {};
  	if(page.index) {
  		params = { tabIndex: page.index };
  	}

  	if(this.nav.getActiveChildNav() && page.index != undefined) {
  		this.nav.getActiveChildNav().select(page.index);
  	}
  	else {
  		this.nav.setRoot(page.pageName, params);
  	}

  }

  isActive(page: PageInterface) {
  	let childNav = this.nav.getActiveChildNav();

  	if(childNav) {
  		if(childNav.getSelected() && childNav.getSelected().root === page.tabCompoent) {
  			return 'primary';
  		}
  		return;
  	}

  	if(this.nav.getActive() && this.nav.getActive().name === page.pageName) {
  		return 'primary';
  	}

  }

}
