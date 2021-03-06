// NG2
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StepPage } from './step.page';
import { StepListComponent } from './components/step-list/step-list.component';
import { StepFormComponent } from './components/step-form/step-form.component';
import { StepService } from './services/step-service/step.service';
import { StepDetailComponent } from './components/step-detail/step-detail.component';
// App

const STEP_ROUTES: Routes = [
  {
    path: 'step',
    component: StepPage,
    children: [
      { path: '', component: StepListComponent },
      { path: 'form', component: StepFormComponent },
      { path: ':id', component: StepDetailComponent }
    ]
  }
];

@NgModule({
  declarations: [
    StepListComponent,
    StepFormComponent,
    StepPage,
    StepDetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(STEP_ROUTES)
  ],
  providers: [
    StepService
  ],
  bootstrap: [StepPage]
})
export class StepModule {
}
