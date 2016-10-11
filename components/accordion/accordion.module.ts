import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CollapseModule } from '../collapse/collapse.module';
import { AccordionCardComponent } from './accordion-group.component';
import { AccordionComponent } from './accordion.component';

@NgModule({
  imports: [CommonModule, CollapseModule],
  declarations: [AccordionComponent, AccordionCardComponent],
  exports: [AccordionComponent, AccordionCardComponent]
})
export class AccordionModule {
}
