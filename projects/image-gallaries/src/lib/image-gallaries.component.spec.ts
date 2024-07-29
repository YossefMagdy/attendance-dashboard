import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGallariesComponent } from './image-gallaries.component';

describe('ImageGallariesComponent', () => {
  let component: ImageGallariesComponent;
  let fixture: ComponentFixture<ImageGallariesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageGallariesComponent]
    });
    fixture = TestBed.createComponent(ImageGallariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
