import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebackofficeComponent } from './createbackoffice.component';

describe('CreatebackofficeComponent', () => {
  let component: CreatebackofficeComponent;
  let fixture: ComponentFixture<CreatebackofficeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatebackofficeComponent]
    });
    fixture = TestBed.createComponent(CreatebackofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
