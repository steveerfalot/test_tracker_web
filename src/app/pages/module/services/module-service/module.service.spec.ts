/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { APP_TEST_PROVIDERS } from '../../../../../testing/test-providers';
import { ModuleService } from './module.service';

describe('Service: ModuleService', () => {
  let subject;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ...APP_TEST_PROVIDERS,
        ModuleService
      ]
    });
  });

  beforeEach(inject([ModuleService], (service: ModuleService) => {
    subject = service;
  }));

  it('should be defined', () => {
    expect(subject).toBeDefined();
  });
});
