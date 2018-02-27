import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderPayItemFormPage } from './order-pay-item-form';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    OrderPayItemFormPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderPayItemFormPage),
    ComponentsModule,
  ],
})
export class OrderPayItemFormPageModule {}
