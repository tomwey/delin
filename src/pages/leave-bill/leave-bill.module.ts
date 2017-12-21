import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeaveBillPage } from './leave-bill';

@NgModule({
  declarations: [
    LeaveBillPage,
  ],
  imports: [
    IonicPageModule.forChild(LeaveBillPage),
  ],
})
export class LeaveBillPageModule {}
