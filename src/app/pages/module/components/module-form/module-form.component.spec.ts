/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleFormComponent } from './module-form.component';
import { FormsModule } from '@angular/forms';
import { addProviders } from '../../../../../test';

describe('ModuleFormComponent', () => {
  let component: ModuleFormComponent;
  let fixture: ComponentFixture<ModuleFormComponent>;

  beforeEach(async(() => {
    addProviders([ ModuleFormComponent ], [], [ FormsModule ]);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
