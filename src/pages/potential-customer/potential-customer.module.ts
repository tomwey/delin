import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PotentialCustomerPage } from './potential-customer';

@NgModule({
  declarations: [
    PotentialCustomerPage,
  ],
  imports: [
    IonicPageModule.forChild(PotentialCustomerPage),
  ],
})
export class PotentialCustomerPageModule {}
