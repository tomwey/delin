import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrthoticsFormPage } from './orthotics-form';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    OrthoticsFormPage,
  ],
  imports: [
    IonicPageModule.forChild(OrthoticsFormPage),
    ComponentsModule,
  ],
})
export class OrthoticsFormPageModule {}
