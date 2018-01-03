import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PotentialCustomerFormPage } from './potential-customer-form';

@NgModule({
  declarations: [
    PotentialCustomerFormPage,
  ],
  imports: [
    IonicPageModule.forChild(PotentialCustomerFormPage),
  ],
})
export class PotentialCustomerFormPageModule {}
