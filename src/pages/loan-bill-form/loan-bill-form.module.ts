import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoanBillFormPage } from './loan-bill-form';

@NgModule({
  declarations: [
    LoanBillFormPage,
  ],
  imports: [
    IonicPageModule.forChild(LoanBillFormPage),
  ],
})
export class LoanBillFormPageModule {}
