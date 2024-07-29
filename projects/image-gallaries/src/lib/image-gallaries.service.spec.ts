import { TestBed } from '@angular/core/testing';

import { ImageGallariesService } from './image-gallaries.service';

describe('ImageGallariesService', () => {
  let service: ImageGallariesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageGallariesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
