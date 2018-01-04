import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeaveBillFormPage } from './leave-bill-form';

@NgModule({
  declarations: [
    LeaveBillFormPage,
  ],
  imports: [
    IonicPageModule.forChild(LeaveBillFormPage),
  ],
})
export class LeaveBillFormPageModule {}
