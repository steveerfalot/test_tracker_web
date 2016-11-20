// NG2
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
// App
import { LandingPage } from './landing.page';
import { LandingComponent } from "./components/landing/landing.component";

const LANDING_ROUTES:Routes = [
  {
    path: '',
    component: LandingPage
  }
];

@NgModule({
  declarations: [
    LandingComponent,
    LandingPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(LANDING_ROUTES)
  ],
  providers: [],
  bootstrap: [LandingPage]
})
export class LandingModule {
}
