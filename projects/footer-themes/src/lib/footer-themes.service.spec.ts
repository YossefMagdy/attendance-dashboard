import { TestBed } from '@angular/core/testing';

import { FooterThemesService } from './footer-themes.service';

describe('FooterThemesService', () => {
  let service: FooterThemesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooterThemesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
