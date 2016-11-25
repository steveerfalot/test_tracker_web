/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { APP_TEST_PROVIDERS } from './../../../../../testing/test-providers';
import { StepService } from './step.service';

describe('Service: StepService', () => {
  let subject;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ...APP_TEST_PROVIDERS,
        StepService
      ]
    });
  });

  beforeEach(inject([StepService], (service: StepService) => {
    subject = service;
  }));

  it('should be defined', () => {
    expect(subject).toBeDefined();
  });

  describe('Function: fetchSteps:Observable<Response>', () => {
    it('should call http.get with "/api/step"', () => {
      // arrange
      spyOn(subject.http, 'get').and.returnValue({
        map: () => {
        }
      });
      // act
      subject.fetchSteps();
      // assert
      expect(subject.http.get).toHaveBeenCalledWith('/api/step');
    });
  });
});
