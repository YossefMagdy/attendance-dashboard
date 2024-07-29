import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcompaignsComponent } from './addcompaigns.component';

describe('AddcompaignsComponent', () => {
  let component: AddcompaignsComponent;
  let fixture: ComponentFixture<AddcompaignsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcompaignsComponent]
    });
    fixture = TestBed.createComponent(AddcompaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
