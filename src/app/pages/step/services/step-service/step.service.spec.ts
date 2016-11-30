/* tslint:disable:no-unused-variable */

import { inject } from '@angular/core/testing';
import { StepService } from './step.service';
import { addProviders } from '../../../../../test';
import { MockBackend } from '@angular/http/testing';
import { Response, ResponseOptions } from '@angular/http';
import { Step } from '../../model/step';

describe('Service: StepService', () => {
  let subject, mockBackend, mockResponse;

  beforeEach(() => {
    addProviders();
  });

  beforeEach(inject([StepService, MockBackend], (service: StepService, _mockBackend: MockBackend) => {
    subject = service;
    mockBackend = _mockBackend;
  }));

  it('should be defined', () => {
    expect(subject).toBeDefined();
  });

  beforeEach(() => {
    mockResponse = { data: ['dumb', 'nonsense'] };
    mockBackend.connections.subscribe(connection => {
      connection.mockRespond(
        new Response(
          new ResponseOptions({
              body: mockResponse
            }
          )
        )
      );
    });
  });

  describe('Function: fetchOne:Observable<Step>', () => {
    it('should http.get with "/api/step/${params.id}"', done => {
      // arrange
      spyOn(subject.http, 'get').and.callThrough();
      // act
      subject.fetchOne({ id: 1 });
      // assert
      setTimeout(() => {
        expect(subject.http.get).toHaveBeenCalledWith('/api/step/1');
        done();
      });
    });

    it('should http.get with "/api/step/${params.id}"', done => {
      // arrange
      // act
      subject.fetchOne({ id: 1 }).subscribe(response => {
        // assert
        expect(response).toEqual(mockResponse);
        done();
      });
    });
  });

  describe('Function: fetchSteps:Observable<Module[]>', () => {
    it('should call http.get with "/api/step"', done => {
      // arrange
      spyOn(subject.http, 'get').and.callThrough();
      // act
      subject.fetchSteps();
      // assert
      setTimeout(() => {
        expect(subject.http.get).toHaveBeenCalledWith('/api/step');
        done();
      });
    });

    it('should call json() on the response', done => {
      // arrange
      // act
      subject.fetchSteps().subscribe(response => {
        // assert
        expect(response).toEqual(mockResponse);
        done();
      });
    });
  });

  describe('Function: saveStep:Observable<Step>', () => {
    it('should http.post with "/api/step, Object<Step>"', done => {
      // arrange
      let mockStep = new Step();
      spyOn(subject.http, 'post').and.callThrough();
      // act
      subject.saveStep(mockStep);
      // assert
      setTimeout(() => {
        expect(subject.http.post).toHaveBeenCalledWith('/api/step', mockStep);
        done();
      });
    });

    it('should http.get with "/api/step/${params.id}"', done => {
      // arrange
      // act
      subject.saveStep({ id: 1 }).subscribe(response => {
        // assert
        expect(response).toEqual(mockResponse);
        done();
      });
    });
  });
});
