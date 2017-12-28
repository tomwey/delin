import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyContactDetailPage } from './my-contact-detail';

@NgModule({
  declarations: [
    MyContactDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MyContactDetailPage),
  ],
})
export class MyContactDetailPageModule {}
