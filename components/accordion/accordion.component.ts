import { Component, HostBinding, Input } from '@angular/core';

import { AccordionCardComponent } from './accordion-group.component';

// todo: support template url
@Component({
  selector: 'accordion',
  template: `<ng-content></ng-content>`
})
export class AccordionComponent {
  @Input() public closeOthers:boolean;

  /* tslint:disable:no-unused-variable */
  @HostBinding('class.card-group')
  public addClass:boolean = true;
  /* tslint:enable:no-unused-variable */

  private groups:Array<AccordionCardComponent> = [];

  public closeOtherCards(openGroup:AccordionCardComponent):void {
    if (!this.closeOthers) {
      return;
    }

    this.groups.forEach((group:AccordionCardComponent) => {
      if (group !== openGroup) {
        group.isOpen = false;
      }
    });
  }

  public addGroup(group:AccordionCardComponent):void {
    this.groups.push(group);
  }

  public removeGroup(group:AccordionCardComponent):void {
    let index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  }
}
