import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TravelReimbursementPage } from './travel-reimbursement';

@NgModule({
  declarations: [
    TravelReimbursementPage,
  ],
  imports: [
    IonicPageModule.forChild(TravelReimbursementPage),
  ],
})
export class TravelReimbursementPageModule {}
