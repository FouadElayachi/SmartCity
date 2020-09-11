import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-silde',
  templateUrl: 'silde.html',
})
export class SildePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

	slides = [
    {
      title: "L'application SmartCity",
      description: "Un projet realisé par l'équipe de l'agence de développement FCPO",
      image: "assets/logo.png",
    },
    {
      title: "Oujda: Capitale de l'oriental",
      description: "<b>SmartCity</b> offre à ses visiteurs un panorama complet de l'actualité de l'oriental",
      image: "assets/actualite/1.jpg",
    },
    {
      title: "Notre but",
      description: "<b>SmartCity</b> aide toute personne voulant utiliser le moyen de transport public qui est le Bus",
      image: "assets/slide3.ico",
    }
  ];
    
    public goAccueil(){
        this.navCtrl.setRoot('AccueilPage');
    }

}
