import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ModuleListComponent } from './components/module-list/module-list.component';
import { ModuleDetailComponent } from './components/module-detail/module-detail.component';
import { ModuleFormComponent } from './components/module-form/module-form.component';
import { ModulePage } from './module.page';
import { ModuleService } from './services/module-service/module.service';

const MODULE_ROUTES: Routes = [
  {
    path: 'module',
    component: ModulePage,
    children: [
      { path: '', component: ModuleListComponent },
      { path: 'form', component: ModuleFormComponent },
      { path: ':id', component: ModuleDetailComponent }
    ]
  }
];

@NgModule({
  declarations: [
    ModuleListComponent,
    ModuleFormComponent,
    ModulePage,
    ModuleDetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(MODULE_ROUTES)
  ],
  providers: [
    ModuleService
  ],
  bootstrap: [ModulePage]
})
export class ModuleModule {
}
