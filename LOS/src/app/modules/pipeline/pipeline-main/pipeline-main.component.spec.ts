import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineMainComponent } from './pipeline-main.component';

describe('PipelineMainComponent', () => {
  let component: PipelineMainComponent;
  let fixture: ComponentFixture<PipelineMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipelineMainComponent]
    });
    fixture = TestBed.createComponent(PipelineMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
