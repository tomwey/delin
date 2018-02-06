import { NgModule } from '@angular/core';
import { AccordionListComponent } from './accordion-list/accordion-list';
import { IonicPageModule } from 'ionic-angular/module';
import { CommonFormComponent } from './common-form/common-form';
import { ErrorEmptyMessageBoxComponent } from './error-empty-message-box/error-empty-message-box';

@NgModule({
	declarations: [AccordionListComponent,
    CommonFormComponent,
    ErrorEmptyMessageBoxComponent],
	imports: [IonicPageModule.forChild([AccordionListComponent])],
	exports: [AccordionListComponent,
    CommonFormComponent,
    ErrorEmptyMessageBoxComponent]
})
export class ComponentsModule {}
