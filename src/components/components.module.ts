import { NgModule } from '@angular/core';
import { AccordionListComponent } from './accordion-list/accordion-list';
import { IonicPageModule } from 'ionic-angular/module';
import { CommFormComponent } from './comm-form/comm-form';
@NgModule({
	declarations: [AccordionListComponent,
    CommFormComponent],
	imports: [IonicPageModule.forChild(AccordionListComponent)],
	exports: [AccordionListComponent,
    CommFormComponent]
})
export class ComponentsModule {}
