import { Component } from '@angular/core';

@Component({
  selector: 'demo-dropdown-basic',
  templateUrl: './basic.html'
})
export class DemoDropdownBasicComponent {
  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};
  public items:string[] = ['The first choice!',
    'And another choice for you.', 'but wait! A third!'];

  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }

}
