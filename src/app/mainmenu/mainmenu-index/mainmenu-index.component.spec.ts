import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainmenuIndexComponent } from './mainmenu-index.component';

describe('MainmenuIndexComponent', () => {
  let component: MainmenuIndexComponent;
  let fixture: ComponentFixture<MainmenuIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainmenuIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainmenuIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
