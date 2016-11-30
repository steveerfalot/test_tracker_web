/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StepDetailComponent } from './step-detail.component';
import { addProviders } from '../../../../../test';

describe('StepDetailComponent', () => {
  let component: StepDetailComponent;
  let fixture: ComponentFixture<StepDetailComponent>;

  beforeEach(async(() => {
    addProviders([ StepDetailComponent ]);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
