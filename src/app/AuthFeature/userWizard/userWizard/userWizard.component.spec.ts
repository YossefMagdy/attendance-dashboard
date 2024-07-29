import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { userWizardComponent } from "./userWizard.component";

describe("NotificationsIndexComponent", () => {
  let component: userWizardComponent;
  let fixture: ComponentFixture<userWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [userWizardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(userWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
