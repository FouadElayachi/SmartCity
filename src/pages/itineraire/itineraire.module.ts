import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItinerairePage } from './itineraire';

@NgModule({
  declarations: [
    ItinerairePage,
  ],
  imports: [
    IonicPageModule.forChild(ItinerairePage),
  ],
})
export class ItinerairePageModule {}
