import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyCustomerFormPage } from './my-customer-form';

@NgModule({
  declarations: [
    MyCustomerFormPage,
  ],
  imports: [
    IonicPageModule.forChild(MyCustomerFormPage),
  ],
})
export class MyCustomerFormPageModule {}
