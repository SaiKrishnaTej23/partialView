import { TestBed, inject } from '@angular/core/testing';

import { PartialViewService } from './partial-view.service';

describe('PartialViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartialViewService]
    });
  });

  it('should be created', inject([PartialViewService], (service: PartialViewService) => {
    expect(service).toBeTruthy();
  }));
});
