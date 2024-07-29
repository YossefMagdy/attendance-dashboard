import { TestBed } from '@angular/core/testing';
import { HeaderThemesService } from './domain/services/HeaderThemesService.service';


describe('HeaderThemesService', () => {
  let service: HeaderThemesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderThemesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
