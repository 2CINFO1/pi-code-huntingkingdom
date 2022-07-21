import { TestBed } from '@angular/core/testing';

import { CampSpotService } from './camp-spot.service';

describe('CampSpotService', () => {
  let service: CampSpotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampSpotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
