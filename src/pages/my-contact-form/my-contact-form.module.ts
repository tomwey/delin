import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyContactFormPage } from './my-contact-form';

@NgModule({
  declarations: [
    MyContactFormPage,
  ],
  imports: [
    IonicPageModule.forChild(MyContactFormPage),
  ],
})
export class MyContactFormPageModule {}
