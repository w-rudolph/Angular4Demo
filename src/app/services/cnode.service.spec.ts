import { TestBed, inject } from '@angular/core/testing';

import { CnodeService } from './cnode.service';

describe('CnodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CnodeService]
    });
  });

  it('should be created', inject([CnodeService], (service: CnodeService) => {
    expect(service).toBeTruthy();
  }));
});
