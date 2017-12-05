import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManInfoPage } from './man-info';

@NgModule({
  declarations: [
    ManInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ManInfoPage),
  ],
})
export class ManInfoPageModule {}
