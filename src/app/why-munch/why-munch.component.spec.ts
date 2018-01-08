import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyMunchComponent } from './why-munch.component';

describe('WhyMunchComponent', () => {
  let component: WhyMunchComponent;
  let fixture: ComponentFixture<WhyMunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyMunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyMunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
