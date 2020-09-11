import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActualitePage } from './actualite';

@NgModule({
  declarations: [
    ActualitePage,
  ],
  imports: [
    IonicPageModule.forChild(ActualitePage),
  ],
})
export class ActualitePageModule {}
