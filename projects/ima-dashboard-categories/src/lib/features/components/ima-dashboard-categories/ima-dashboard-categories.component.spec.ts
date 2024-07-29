import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImaDashboardCategoriesComponent } from './ima-dashboard-categories.component';

describe('ImaDashboardCategoriesComponent', () => {
  let component: ImaDashboardCategoriesComponent;
  let fixture: ComponentFixture<ImaDashboardCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImaDashboardCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImaDashboardCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
