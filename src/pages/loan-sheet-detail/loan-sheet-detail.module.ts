import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoanSheetDetailPage } from './loan-sheet-detail';

@NgModule({
  declarations: [
    LoanSheetDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(LoanSheetDetailPage),
  ],
})
export class LoanSheetDetailPageModule {}
