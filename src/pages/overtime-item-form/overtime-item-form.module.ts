import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OvertimeItemFormPage } from './overtime-item-form';

@NgModule({
  declarations: [
    OvertimeItemFormPage,
  ],
  imports: [
    IonicPageModule.forChild(OvertimeItemFormPage),
  ],
})
export class OvertimeItemFormPageModule {}
