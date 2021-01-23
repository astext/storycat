import { TestBed } from '@angular/core/testing';

import { StorycatService } from './storycat.service';

describe('StorycatService', () => {
  let service: StorycatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorycatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
