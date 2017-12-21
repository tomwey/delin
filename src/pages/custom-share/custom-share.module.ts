import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomSharePage } from './custom-share';

@NgModule({
  declarations: [
    CustomSharePage,
  ],
  imports: [
    IonicPageModule.forChild(CustomSharePage),
  ],
})
export class CustomSharePageModule {}
