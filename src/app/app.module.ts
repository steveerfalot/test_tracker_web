// NG2
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule, RequestOptions, XHRBackend } from "@angular/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
// App
import { AppComponent } from "./app.component";
import { Landing } from "./components/landing/landing.component";
import { ROUTES } from './app.component.routes';
import { Step } from "./components/step/step.component";
import { StepService } from "./services/step.service";
import { BetterHttpService } from "./services/better-http.service";

@NgModule({
  declarations: [
    AppComponent,
    Landing,
    Step
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    {
      provide: BetterHttpService,
      deps: [XHRBackend, RequestOptions],
      useFactory: (backend:XHRBackend, options:RequestOptions) => {
        return new BetterHttpService(backend, options);
      }
    },
    StepService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
