import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderProductItemFormPage } from './order-product-item-form';

@NgModule({
  declarations: [
    OrderProductItemFormPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderProductItemFormPage),
  ],
})
export class OrderProductItemFormPageModule {}
