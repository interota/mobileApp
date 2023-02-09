import { TestBed } from '@angular/core/testing';

import { FcmProviderService } from './fcm-provider.service';

describe('FcmProviderService', () => {
  let service: FcmProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FcmProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
