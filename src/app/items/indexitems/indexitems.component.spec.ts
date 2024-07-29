import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexitemsComponent } from './indexitems.component';

describe('IndexitemsComponent', () => {
  let component: IndexitemsComponent;
  let fixture: ComponentFixture<IndexitemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexitemsComponent]
    });
    fixture = TestBed.createComponent(IndexitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
