import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberBaseComponent } from './subscriber-base.component';

describe('SubscriberBaseComponent', () => {
  let component: SubscriberBaseComponent;
  let fixture: ComponentFixture<SubscriberBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriberBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
