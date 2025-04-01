import { TestBed } from '@angular/core/testing';

import { MarqueteurService } from './marqueteur.service';

describe('MarqueteurService', () => {
  let service: MarqueteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarqueteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
