import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryIndexComponent } from './gallery-index.component';

describe('GalleryIndexComponent', () => {
  let component: GalleryIndexComponent;
  let fixture: ComponentFixture<GalleryIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryIndexComponent]
    });
    fixture = TestBed.createComponent(GalleryIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
