import { Routes } from "@angular/router";
import { StepComponent } from "./components/step/step.component";
import { LandingComponent } from "./components/landing/landing.component";
import { AddStepComponent } from "./add-step/add-step.component";

export const ROUTES:Routes = [
  { path: '', component: LandingComponent },
  { path: 'step', component: StepComponent },
  { path: 'step/add', component: AddStepComponent }
];
