import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoanSheetFormPage } from './loan-sheet-form';

@NgModule({
  declarations: [
    LoanSheetFormPage,
  ],
  imports: [
    IonicPageModule.forChild(LoanSheetFormPage),
  ],
})
export class LoanSheetFormPageModule {}
