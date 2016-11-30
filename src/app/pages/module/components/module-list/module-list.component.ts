import { Component, OnInit } from '@angular/core';
import { Module } from '../../model/module';
import { ModuleService } from '../../services/module-service/module.service';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.sass']
})
export class ModuleListComponent implements OnInit {
  modules: Module[];
  moduleService: ModuleService;

  constructor(moduleService: ModuleService) {
    this.moduleService = moduleService;
  }

  ngOnInit() {
    this.moduleService.fetchModules().subscribe((response: Module[]) => {
      this.modules = response;
    });
  }

}
