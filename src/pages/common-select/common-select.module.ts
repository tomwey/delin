import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommonSelectPage } from './common-select';

@NgModule({
  declarations: [
    CommonSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(CommonSelectPage),
  ],
})
export class CommonSelectPageModule {}
