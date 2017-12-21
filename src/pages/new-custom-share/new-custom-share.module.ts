import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewCustomSharePage } from './new-custom-share';

@NgModule({
  declarations: [
    NewCustomSharePage,
  ],
  imports: [
    IonicPageModule.forChild(NewCustomSharePage),
  ],
})
export class NewCustomSharePageModule {}
