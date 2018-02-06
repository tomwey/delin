import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyContactsPage } from './my-contacts';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MyContactsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyContactsPage),
    ComponentsModule,
  ],
})
export class MyContactsPageModule {}
