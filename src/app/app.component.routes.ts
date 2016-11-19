import { Routes } from "@angular/router";
import { Step } from "./components/step/step.component";
import { Landing } from "./components/landing/landing.component";

export const ROUTES:Routes = [
  { path: '', component: Landing },
  { path: 'steps', component: Step }
];
