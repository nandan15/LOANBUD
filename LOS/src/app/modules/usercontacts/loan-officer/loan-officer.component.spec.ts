import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanOfficerComponent } from './loan-officer.component';

describe('LoanOfficerComponent', () => {
  let component: LoanOfficerComponent;
  let fixture: ComponentFixture<LoanOfficerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanOfficerComponent]
    });
    fixture = TestBed.createComponent(LoanOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
