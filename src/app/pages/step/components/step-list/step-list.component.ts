import { Component, OnInit } from '@angular/core';
import { StepService } from "../../services/step-service/step.service";

@Component({
  selector: 'step-list',
  templateUrl: './step-list.component.html',
  styleUrls: ['./step-list.component.sass']
})
export class StepListComponent implements OnInit {
  stepService:StepService;
  steps:any[];

  constructor(stepService:StepService) {
    this.stepService = stepService;
  }

  ngOnInit() {
    this.stepService.fetchSteps().subscribe((response:any) => {
      this.steps = response;
    });
  }

}
