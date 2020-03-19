import { TestBed } from '@angular/core/testing';

import { ItNewsService } from './it-news.service';

describe('ItNewsService', () => {
  let service: ItNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
