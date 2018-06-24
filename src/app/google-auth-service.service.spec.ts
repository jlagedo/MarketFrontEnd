import { TestBed, inject } from '@angular/core/testing';

import { GoogleAuthServiceService } from './google-auth-service.service';

describe('GoogleAuthServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleAuthServiceService]
    });
  });

  it('should be created', inject([GoogleAuthServiceService], (service: GoogleAuthServiceService) => {
    expect(service).toBeTruthy();
  }));
});
