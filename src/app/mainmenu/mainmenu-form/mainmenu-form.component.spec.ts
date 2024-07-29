import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainmenuFormComponent } from './mainmenu-form.component';

describe('MainmenuFormComponent', () => {
  let component: MainmenuFormComponent;
  let fixture: ComponentFixture<MainmenuFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainmenuFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainmenuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
