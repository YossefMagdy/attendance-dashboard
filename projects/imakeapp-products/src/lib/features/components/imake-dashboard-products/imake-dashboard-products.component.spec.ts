import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImakeDashboardProductsComponent } from './imake-dashboard-products.component';

describe('ImakeDashboardProductsComponent', () => {
  let component: ImakeDashboardProductsComponent;
  let fixture: ComponentFixture<ImakeDashboardProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImakeDashboardProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImakeDashboardProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
