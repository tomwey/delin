import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyCustomerFormPage } from './my-customer-form';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MyCustomerFormPage,
  ],
  imports: [
    IonicPageModule.forChild(MyCustomerFormPage),
    ComponentsModule,
  ],
})
export class MyCustomerFormPageModule {}
