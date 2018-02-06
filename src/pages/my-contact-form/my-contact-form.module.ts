import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyContactFormPage } from './my-contact-form';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MyContactFormPage,
  ],
  imports: [
    IonicPageModule.forChild(MyContactFormPage),
    ComponentsModule
  ],
})
export class MyContactFormPageModule {}
