import { NgModule } from '@angular/core';
import { AccordionListComponent } from './accordion-list/accordion-list';
import { IonicPageModule } from 'ionic-angular/module';
import { CommonFormComponent } from './common-form/common-form';

@NgModule({
	declarations: [AccordionListComponent,
    CommonFormComponent],
	imports: [IonicPageModule.forChild([AccordionListComponent])],
	exports: [AccordionListComponent,
    CommonFormComponent]
})
export class ComponentsModule {}
