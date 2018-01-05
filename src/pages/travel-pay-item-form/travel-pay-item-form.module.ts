import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TravelPayItemFormPage } from './travel-pay-item-form';

@NgModule({
  declarations: [
    TravelPayItemFormPage,
  ],
  imports: [
    IonicPageModule.forChild(TravelPayItemFormPage),
  ],
})
export class TravelPayItemFormPageModule {}
