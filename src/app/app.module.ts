import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ROUTES } from './app.component.routes';
import { StepModule } from './pages/step/step.module';
import { LandingModule } from './pages/landing/landing.module';
import { ModuleModule } from './pages/module/module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LandingModule,
    ModuleModule,
    RouterModule.forRoot(ROUTES),
    StepModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
