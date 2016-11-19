/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Step } from './step.component';

describe('Step', () => {
  let component: Step;
  let fixture: ComponentFixture<Step>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
