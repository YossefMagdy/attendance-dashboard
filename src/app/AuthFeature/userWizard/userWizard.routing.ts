import { Routes } from "@angular/router";
import { userWizardComponent } from "./userWizard/userWizard.component";
export const badgesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "all",
        component: userWizardComponent,
      },
    ],
  },
];
