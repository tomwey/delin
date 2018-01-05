import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderPayItemFormPage } from './order-pay-item-form';

@NgModule({
  declarations: [
    OrderPayItemFormPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderPayItemFormPage),
  ],
})
export class OrderPayItemFormPageModule {}
