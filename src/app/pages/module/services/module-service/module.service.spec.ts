/* tslint:disable:no-unused-variable */

import { inject } from '@angular/core/testing';
import { ModuleService } from './module.service';
import { addProviders } from '../../../../../test';

describe('Service: ModuleService', () => {
  let subject;

  beforeEach(() => {
    addProviders();
  });

  beforeEach(inject([ModuleService], (service: ModuleService) => {
    subject = service;
  }));

  it('should be defined', () => {
    expect(subject).toBeDefined();
  });
});
