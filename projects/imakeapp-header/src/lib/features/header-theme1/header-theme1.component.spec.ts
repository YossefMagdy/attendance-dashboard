import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTheme1Component } from './header-theme1.component';

describe('HeaderTheme1Component', () => {
  let component: HeaderTheme1Component;
  let fixture: ComponentFixture<HeaderTheme1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTheme1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTheme1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
