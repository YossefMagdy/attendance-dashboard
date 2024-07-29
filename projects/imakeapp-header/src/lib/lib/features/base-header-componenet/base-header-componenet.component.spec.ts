import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseHeaderComponenetComponent } from './base-header-componenet.component';

describe('BaseHeaderComponenetComponent', () => {
  let component: BaseHeaderComponenetComponent;
  let fixture: ComponentFixture<BaseHeaderComponenetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseHeaderComponenetComponent]
    });
    fixture = TestBed.createComponent(BaseHeaderComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
