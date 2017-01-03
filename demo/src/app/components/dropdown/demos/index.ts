import { DropdownDemoComponent } from './dropdown-demo.component';
import { DemoDropdownBasicComponent } from './basic/basic';
import { DemoDropdownSplitComponent } from './split/split';
import { DemoDropdownContainerComponent } from './container/container';
import { DemoDropdownBasicLinkComponent } from './basic/basic-link';

export const DEMO_COMPONENTS = [
  DropdownDemoComponent, DemoDropdownBasicComponent, DemoDropdownBasicLinkComponent, DemoDropdownSplitComponent,
  DemoDropdownContainerComponent
];

export const DEMOS = {

  basic: {
    component: require('!!raw?lang=typescript!./basic/basic.ts'),
    html: require('!!raw?lang=markup!./basic/basic.html')
  },
  basicLink: {
    component: require('!!raw?lang=typescript!./basic/basic-link.ts'),
    html: require('!!raw?lang=markup!./basic/basic-link.html')
  },
  splitBtn: {
    component: require('!!raw?lang=typescript!./split/split.ts'),
    html: require('!!raw?lang=markup!./split/split.html')
  },
  container: {
    component: require('!!raw?lang=typescript!./container/container.ts'),
    html: require('!!raw?lang=markup!./container/container.html')
  },
  old: {
    component: require('!!raw?lang=typescript!./dropdown-demo.component'),
    html: require('!!raw?lang=markup!./dropdown-demo.component.html')
  }

};
