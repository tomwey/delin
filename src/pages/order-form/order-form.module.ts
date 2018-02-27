import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderFormPage } from './order-form';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    OrderFormPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderFormPage),
    ComponentsModule,
  ],
})
export class OrderFormPageModule {}
