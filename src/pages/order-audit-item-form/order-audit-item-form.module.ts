import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderAuditItemFormPage } from './order-audit-item-form';

@NgModule({
  declarations: [
    OrderAuditItemFormPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderAuditItemFormPage),
  ],
})
export class OrderAuditItemFormPageModule {}
