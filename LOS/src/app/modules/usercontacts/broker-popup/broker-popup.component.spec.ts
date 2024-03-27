import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerPopupComponent } from './broker-popup.component';

describe('BrokerPopupComponent', () => {
  let component: BrokerPopupComponent;
  let fixture: ComponentFixture<BrokerPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrokerPopupComponent]
    });
    fixture = TestBed.createComponent(BrokerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
