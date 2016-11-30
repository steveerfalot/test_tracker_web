/* tslint:disable:no-unused-variable */
import { async, inject } from '@angular/core/testing';
import { StepListComponent } from './step-list.component';
import { addProviders } from '../../../../../test';
import { MockBackend } from '@angular/http/testing';
import { Response, ResponseOptions } from '@angular/http';
import { RouterModule } from '@angular/router';

describe('StepListComponent', () => {
  let comp: StepListComponent, mockBackend: MockBackend;

  beforeEach(async(() => {
    addProviders([StepListComponent], [StepListComponent], [RouterModule]);
  }));

  beforeEach(inject([StepListComponent, MockBackend], (_comp, _mockBackend) => {
    comp = _comp;
    mockBackend = _mockBackend;
  }));

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  describe('Function: ngOnInit', () => {
    let mockResponse;
    beforeEach(() => {
      mockResponse = [
        { id: 1, step: 'Do stuff' }
      ];
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

    it('should call stepService.fetchSteps', done => {
      // arrange
      spyOn(comp.stepService, 'fetchSteps').and.callThrough();
      // act
      comp.ngOnInit();
      // assert
      setTimeout(() => {
        expect(comp.stepService.fetchSteps).toHaveBeenCalled();
        done();
      });
    });

    it('should set steps to the response', done => {
      // arrange
      // act
      comp.ngOnInit();
      // assert
      setTimeout(() => {
        expect(comp.steps).toEqual(mockResponse);
        done();
      });
    });
  });

  describe('Function: view', () => {
    it('should call router.navigate with the proper params', () => {
      // arrange
      spyOn(comp.router, 'navigate').and.callFake(() => {});
      // act
      comp.view(1);
      // assert
      expect(comp.router.navigate).toHaveBeenCalledWith(['step/1']);
    });
  });
});
