import { TestBed } from '@angular/core/testing';

import { RESTAPIService } from './restapi.service';

describe('RESTAPIService', () => {
  let service: RESTAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RESTAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
