import { Component, OnInit } from '@angular/core';
import { Module } from '../../model/module';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ModuleService } from '../../services/module-service/module.service';

@Component({
  selector: 'app-module-form',
  templateUrl: './module-form.component.html',
  styleUrls: ['./module-form.component.sass']
})
export class ModuleFormComponent implements OnInit {
  model = new Module(null, '', []);
  router: Router;
  moduleForm: NgForm;
  submitted: boolean = false;
  moduleService: ModuleService;

  constructor() { }

  ngOnInit() {
  }

}
