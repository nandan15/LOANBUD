import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLoanOfficerComponent } from './create-loan-officer.component';

describe('CreateLoanOfficerComponent', () => {
  let component: CreateLoanOfficerComponent;
  let fixture: ComponentFixture<CreateLoanOfficerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateLoanOfficerComponent]
    });
    fixture = TestBed.createComponent(CreateLoanOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
