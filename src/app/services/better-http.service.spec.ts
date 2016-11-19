/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BetterHttpService } from './better-http.service';

describe('Service: BetterHttp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BetterHttpService]
    });
  });

  it('should ...', inject([BetterHttpService], (service: BetterHttpService) => {
    expect(service).toBeTruthy();
  }));
});
