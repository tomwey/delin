import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoanSheetPage } from './loan-sheet';

@NgModule({
  declarations: [
    LoanSheetPage,
  ],
  imports: [
    IonicPageModule.forChild(LoanSheetPage),
  ],
})
export class LoanSheetPageModule {}
