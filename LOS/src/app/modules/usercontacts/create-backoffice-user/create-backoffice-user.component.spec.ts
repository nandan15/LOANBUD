import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBackofficeUserComponent } from './create-backoffice-user.component';

describe('CreateBackofficeUserComponent', () => {
  let component: CreateBackofficeUserComponent;
  let fixture: ComponentFixture<CreateBackofficeUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBackofficeUserComponent]
    });
    fixture = TestBed.createComponent(CreateBackofficeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
