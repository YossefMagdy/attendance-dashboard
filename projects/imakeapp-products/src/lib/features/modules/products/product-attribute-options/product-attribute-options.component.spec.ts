import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAttributeOptionsComponent } from './product-attribute-options.component';

describe('ProductAttributeOptionsComponent', () => {
  let component: ProductAttributeOptionsComponent;
  let fixture: ComponentFixture<ProductAttributeOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAttributeOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAttributeOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
