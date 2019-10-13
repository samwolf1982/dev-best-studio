import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiatorJqueryComponent } from './initiator-jquery.component';

describe('InitiatorJqueryComponent', () => {
  let component: InitiatorJqueryComponent;
  let fixture: ComponentFixture<InitiatorJqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitiatorJqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiatorJqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
