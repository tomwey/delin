import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderAuditItemFormPage } from './order-audit-item-form';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    OrderAuditItemFormPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderAuditItemFormPage),
    ComponentsModule,
  ],
})
export class OrderAuditItemFormPageModule {}
