import { NgModule } from '@angular/core';
import { MapsPage} from './maps';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [MapsPage],
  imports: [IonicPageModule.forChild(MapsPage)],
  entryComponents: [MapsPage]
})
export class HomePageModule { }