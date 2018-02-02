import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PotentialCustomerFormPage } from './potential-customer-form';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PotentialCustomerFormPage,
  ],
  imports: [
    IonicPageModule.forChild(PotentialCustomerFormPage),
    ComponentsModule
  ],
})
export class PotentialCustomerFormPageModule {}
