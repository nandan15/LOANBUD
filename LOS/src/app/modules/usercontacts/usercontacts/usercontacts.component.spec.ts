import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercontactsComponent } from './usercontacts.component';

describe('UsercontactsComponent', () => {
  let component: UsercontactsComponent;
  let fixture: ComponentFixture<UsercontactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsercontactsComponent]
    });
    fixture = TestBed.createComponent(UsercontactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
