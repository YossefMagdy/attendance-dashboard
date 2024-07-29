import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterThemesComponent } from './footer-themes.component';

describe('FooterThemesComponent', () => {
  let component: FooterThemesComponent;
  let fixture: ComponentFixture<FooterThemesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterThemesComponent]
    });
    fixture = TestBed.createComponent(FooterThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
