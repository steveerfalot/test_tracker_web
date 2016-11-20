// NG2
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
// App
import { AppComponent } from "./app.component";
import { LandingComponent } from "./components/landing/landing.component";
import { ROUTES } from './app.component.routes';
import { StepComponent } from "./components/step/step.component";
import { StepService } from "./services/step.service";
import { AddStepComponent } from './add-step/add-step.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    StepComponent,
    AddStepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    StepService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
