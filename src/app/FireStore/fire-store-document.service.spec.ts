import { TestBed } from '@angular/core/testing';

import { FireStoreDocumentService } from './fire-store-document.service';

describe('FireStoreDocumentService', () => {
  let service: FireStoreDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireStoreDocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
