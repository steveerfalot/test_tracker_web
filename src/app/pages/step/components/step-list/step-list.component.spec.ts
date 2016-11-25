/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_TEST_PROVIDERS } from './../../../../../testing/test-providers';
import { StepListComponent } from './step-list.component';

describe('StepListComponent', () => {
  let component: StepListComponent;
  let fixture: ComponentFixture<StepListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StepListComponent],
      providers: [
        ...APP_TEST_PROVIDERS
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
