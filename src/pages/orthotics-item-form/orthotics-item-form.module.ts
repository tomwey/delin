import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrthoticsItemFormPage } from './orthotics-item-form';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    OrthoticsItemFormPage,
  ],
  imports: [
    IonicPageModule.forChild(OrthoticsItemFormPage),
    ComponentsModule,
  ],
})
export class OrthoticsItemFormPageModule {}
