import { Component } from '@angular/core';
import { DEMOS } from './demos';

// webpack html imports
let titleDoc = require('html!markdown!./docs/title.md');

@Component({
  selector: 'dropdown-section',
  template: `
<demo-section [name]="name" [src]="src">
  <p>Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They’re made interactive with the included dropdown directives.</p>
  
  <h2>Contents</h2>
  <ul>
    <li><a pageScroll href="#usage">Usage</a></li>
    <li><a pageScroll href="#examples">Examples</a>
      <ul>
        <li><a pageScroll href="#single-button">Single button dropdowns</a></li>
        <li><a pageScroll href="#split-button">Split button dropdowns</a></li>
        <li><a pageScroll href="#container-body">Append to body</a></li>
      </ul>
    </li>
    <li><a pageScroll href="#api-reference">API Reference</a>
      <ul>
        <li><a pageScroll href="#dropdown-directive">DropdownDirective</a></li>
        <li><a pageScroll href="#dropdown-toggle-directive">DropdownToggleDirective</a></li>
        <li><a pageScroll href="#dropdown-config">DropdownConfig</a></li>
      </ul>
    </li>
  </ul>
       
  <h2 id="usage">Usage</h2>

  <p [innerHtml]="titleDoc"></p>

  <h2 id="examples">Examples</h2>
  <p>Wrap the dropdown’s toggle (your button or link) and the dropdown menu within <code>.dropdown</code>, 
  or another element that declares <code>position: relative;</code>. 
  Dropdowns can be triggered from <code> &lt;a&gt;</code> or <code> &lt;button&gt;</code> elements to better fit your potential needs.</p>
  <!-- basic -->
  <h2 id="single-button">Single button dropdowns</h2>
      
  <p>Any single <code>.btn</code> can be turned into a dropdown toggle with some markup changes. 
  Here’s how you can put them to work with either  <code> &lt;button&gt; </code> elements:</p>
  
  <ng-sample-box [ts]="demos.basic.component" [html]="demos.basic.html">
    <demo-dropdown-basic></demo-dropdown-basic>
  </ng-sample-box>
  
  <p>And with <code> &lt;a&gt;</code> elements:</p>
 
  <ng-sample-box [ts]="demos.basicLink.component" [html]="demos.basicLink.html">
    <demo-dropdown-basic-link></demo-dropdown-basic-link>
  </ng-sample-box>

  
  <h2 id="split-button">Split button dropdowns</h2>
  <p>Similarly, create split button dropdowns with virtually the same markup as single button dropdowns,
   but with the addition of <code>.dropdown-toggle-split</code> for proper spacing around the dropdown caret.<br><br>
   We use this extra class to reduce the horizontal <code>padding</code> on either side of the caret by 25% and 
   remove the <code>margin-left</code> that’s added for regular button dropdowns. 
   Those extra changes keep the caret centered in the split button and provide a more appropriately 
   sized hit area next to the main button.</p>
  
  <ng-sample-box [ts]="demos.splitBtn.component" [html]="demos.splitBtn.html">
    <demo-dropdown-split></demo-dropdown-split>
  </ng-sample-box>
  
   <h2 id="container-body">Append to body</h2>
   
   <ng-sample-box [ts]="demos.container.component" [html]="demos.container.html">
    <demo-dropdown-container></demo-dropdown-container>
  </ng-sample-box>
  
  
  
  <ng-sample-box [ts]="demos.old.component" [html]="demos.old.html">
    <dropdown-demo></dropdown-demo>
  </ng-sample-box>
      
  <h2 id="api-reference">API Reference</h2>
  <ng-api-doc id="dropdown-directive" directive="DropdownDirective"></ng-api-doc>
  <ng-api-doc id="dropdown-toggle-directive" directive="DropdownToggleDirective"></ng-api-doc>
  <ng-api-doc-config id="dropdown-config" type="DropdownConfig"></ng-api-doc-config>
</demo-section>`
})
export class DropdownSectionComponent {
  public name: string = 'Dropdowns';
  public src: string = 'https://github.com/valor-software/ng2-bootstrap/tree/development/src/dropdown';
  public demos: any = DEMOS;
  public titleDoc: string = titleDoc;
}
