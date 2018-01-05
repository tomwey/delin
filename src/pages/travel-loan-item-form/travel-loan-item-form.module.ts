import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TravelLoanItemFormPage } from './travel-loan-item-form';

@NgModule({
  declarations: [
    TravelLoanItemFormPage,
  ],
  imports: [
    IonicPageModule.forChild(TravelLoanItemFormPage),
  ],
})
export class TravelLoanItemFormPageModule {}
