import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';

declare var google;


//Native Component

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public navCtrl: NavController) {

  }

    ionViewDidLoad(){
    this.initMap();
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 17,
      center: {lat: 34.657220, lng: -1.898194}
    });

    this.directionsDisplay.setMap(this.map);

     var locations = [
        {lat: 34.6561487, lng: -1.9005125},
        {lat: 34.656725,  lng: -1.9045885},
        {lat: 34.6580299, lng: -1.9089936},
        {lat: 34.6611527, lng: -1.9110466},
        {lat: 34.6575306, lng: -1.9133339},
        {lat: 34.6579644, lng: -1.9171943},
        {lat: 34.6598516, lng: -1.9206382},
        {lat: 34.6629375, lng: -1.9193078},
        {lat: 34.6721584, lng: -1.917394},
        {lat: 34.6727932, lng: -1.9186956},
        {lat: 34.6742192, lng: -1.9188491},
        {lat: 34.679495,  lng: -1.9184174},
        {lat: 34.6842819, lng: -1.9149995},
        {lat: 34.6562317, lng: -1.8997961},
        {lat: 34.6616034, lng: -1.9049897},
        {lat: 34.6584314, lng: -1.9021087},
        {lat: 34.6643041, lng: -1.9076601},
        {lat: 34.6650591, lng: -1.9107902},
        {lat: 34.6675651, lng: -1.9127143},
        {lat: 34.6710584, lng: -1.9118741},
        {lat: 34.6729068, lng: -1.9130765},
        {lat: 34.6758139, lng: -1.9156279},
        {lat: 34.6796916, lng: -1.91818},
        {lat: 34.6844716, lng: -1.9149688}
        ];
      var labels = ['20','20','20','20','20','20','20','20','20','20','20','20','20','25','25','25','25','25','25','25','25','25','25','25'] ;

var marker, i;

for (i = 0; i < locations.length; i++) {  
  marker = new google.maps.Marker({
    position: locations[i],
    map: this.map,
    label: labels[i]
  });


}
  }



}
