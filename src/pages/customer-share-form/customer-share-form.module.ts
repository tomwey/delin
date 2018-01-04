import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerShareFormPage } from './customer-share-form';

@NgModule({
  declarations: [
    CustomerShareFormPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerShareFormPage),
  ],
})
export class CustomerShareFormPageModule {}
