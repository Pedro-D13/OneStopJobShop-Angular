import { TestBed } from '@angular/core/testing';
import { SearchJobsWithParamsService } from './search-jobs-with-params.service';


describe('SearchJobsWithParamsService', () => {
  let service: SearchJobsWithParamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({}); // init the testbed
    service = TestBed.inject(SearchJobsWithParamsService); // inject the testbed with the service we are testing
  });

  it('should have a readOnlyProperty', () => {
    expect(service.api_url).toBeTruthy();
  });
});
