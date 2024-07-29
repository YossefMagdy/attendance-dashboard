import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexcompaignsComponent } from './indexcompaigns.component';

describe('IndexcompaignsComponent', () => {
  let component: IndexcompaignsComponent;
  let fixture: ComponentFixture<IndexcompaignsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexcompaignsComponent]
    });
    fixture = TestBed.createComponent(IndexcompaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
