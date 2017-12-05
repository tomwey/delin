import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgencyPage } from './agency';
import { AccordionListComponent } from '../../components/accordion-list/accordion-list';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AgencyPage,
  ],
  imports: [
    IonicPageModule.forChild(AgencyPage),
    ComponentsModule,
  ],
})
export class AgencyPageModule {}
