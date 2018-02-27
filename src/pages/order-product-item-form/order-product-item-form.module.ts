import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderProductItemFormPage } from './order-product-item-form';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    OrderProductItemFormPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderProductItemFormPage),
    ComponentsModule
  ],
})
export class OrderProductItemFormPageModule {}
