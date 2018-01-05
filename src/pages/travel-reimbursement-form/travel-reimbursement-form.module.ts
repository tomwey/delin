import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TravelReimbursementFormPage } from './travel-reimbursement-form';

@NgModule({
  declarations: [
    TravelReimbursementFormPage,
  ],
  imports: [
    IonicPageModule.forChild(TravelReimbursementFormPage),
  ],
})
export class TravelReimbursementFormPageModule {}
