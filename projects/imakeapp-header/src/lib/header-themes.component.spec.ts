import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderThemesComponent } from './header-themes.component';

describe('HeaderThemesComponent', () => {
  let component: HeaderThemesComponent;
  let fixture: ComponentFixture<HeaderThemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderThemesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
