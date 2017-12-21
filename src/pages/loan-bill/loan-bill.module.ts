import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoanBillPage } from './loan-bill';

@NgModule({
  declarations: [
    LoanBillPage,
  ],
  imports: [
    IonicPageModule.forChild(LoanBillPage),
  ],
})
export class LoanBillPageModule {}
