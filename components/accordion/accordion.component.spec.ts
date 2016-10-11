import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionModule } from './accordion.module';

const html = `
  <accordion [closeOthers]="oneAtATime">

    <accordion-group heading="Card 1"
                     [isOpen]="cards[0].isOpen"
                     [isDisabled]="cards[0].isDisabled">
      Content of card 1
    </accordion-group>

    <accordion-group heading="Card 2"
                     [isOpen]="cards[1].isOpen"
                     [isDisabled]="cards[1].isDisabled">
      Content of card 2
    </accordion-group>

    <accordion-group heading="Card 3"
                     [isOpen]="cards[2].isOpen"
                     [isDisabled]="cards[2].isDisabled">
      Content of card 3
    </accordion-group>

  </accordion>
`;

function getCards(element:HTMLElement):Element[] {
  return Array.from(element.querySelectorAll('accordion-group'));
}

function expectOpenCards(nativeEl:HTMLElement, openCardsDef:boolean[]):void {
  const cards = getCards(nativeEl);
  expect(cards.length).toBe(openCardsDef.length);
  for (let i = 0; i < cards.length; i++) {
    if (openCardsDef[i]) {
      expect(cards[i].classList).toContain('card-open');
    } else {
      expect(cards[i].classList).not.toContain('card-open');
    }
  }
}

function hasTitle(element:HTMLElement, str:string):boolean {
  return element.textContent === str;
}

describe('Component: Accordion', () => {
  let fixture:ComponentFixture<TestAccordionComponent>;
  let context:any;
  let element:any;

  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [TestAccordionComponent], imports: [AccordionModule]});
    TestBed.overrideComponent(TestAccordionComponent, {set: {template: html}});
    fixture = TestBed.createComponent(TestAccordionComponent);
    context = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should have no open cards', () => {
    expectOpenCards(element, [false, false, false]);
  });

  it('should have open card based on binding', () => {
    context.cards[0].isOpen = true;
    fixture.detectChanges();
    expectOpenCards(element, [true, false, false]);
  });

  it('should toggle cards independently', () => {
    context.oneAtATime = false;

    context.cards[1].isOpen = true;
    fixture.detectChanges();
    expectOpenCards(element, [false, true, false]);

    context.cards[0].isOpen = true;
    fixture.detectChanges();
    expectOpenCards(element, [true, true, false]);

    context.cards[1].isOpen = false;
    fixture.detectChanges();
    expectOpenCards(element, [true, false, false]);

    context.cards[2].isOpen = true;
    fixture.detectChanges();
    expectOpenCards(element, [true, false, true]);

    context.cards[0].isOpen = false;
    fixture.detectChanges();
    expectOpenCards(element, [false, false, true]);

    context.cards[2].isOpen = false;
    fixture.detectChanges();
    expectOpenCards(element, [false, false, false]);
  });

  it('should have the appropriate heading', () => {
    const titles = Array.from(element.querySelectorAll('.card-header a span'));
    titles.forEach((title:HTMLElement, idx:number) => expect(hasTitle(title, `Card ${idx + 1}`)).toBe(true));
  });

  it('should only open one at a time', () => {
    const headingLinks = element.querySelectorAll('.card-title a');

    headingLinks[0].click();
    fixture.detectChanges();
    expectOpenCards(element, [true, false, false]);

    headingLinks[2].click();
    fixture.detectChanges();
    expectOpenCards(element, [false, false, true]);

    headingLinks[2].click();
    fixture.detectChanges();
    expectOpenCards(element, [false, false, false]);
  });

  it('should have only one open card even if binding says otherwise', () => {
    context.cards[0].isOpen = true;
    context.cards[1].isOpen = true;
    // which of cards should be opened there? the first or the last one? (now - last)
    fixture.detectChanges();
    expectOpenCards(element, [false, true, false]);
  });

  it('should not open disabled cards from click', () => {
    context.cards[0].isDisabled = true;
    fixture.detectChanges();
    const headingLinks = element.querySelectorAll('.card-title a');
    headingLinks[0].click();
    fixture.detectChanges();
    expectOpenCards(element, [false, false, false]);
  });
});

@Component({
  selector: 'accordion-test',
  template: ''
})

class TestAccordionComponent {
  public oneAtATime:boolean = true;
  public cards:Array<any> = [
    {isOpen: false, isDisabled: false},
    {isOpen: false, isDisabled: false},
    {isOpen: false, isDisabled: false}
  ];
}
