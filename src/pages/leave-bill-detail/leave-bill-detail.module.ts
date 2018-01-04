import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeaveBillDetailPage } from './leave-bill-detail';

@NgModule({
  declarations: [
    LeaveBillDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(LeaveBillDetailPage),
  ],
})
export class LeaveBillDetailPageModule {}
