import { SharedModule } from "../../../../core/module/shared.module";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { userWizardComponent } from "./userWizard/userWizard.component";
import { badgesRoutes } from "./userWizard.routing";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [userWizardComponent, userWizardComponent],
  imports: [CommonModule, RouterModule.forChild(badgesRoutes), SharedModule],
  exports: [],
  providers: [],
})
export class userWizardModule {}
