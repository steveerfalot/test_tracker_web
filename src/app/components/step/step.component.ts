import { Component, OnInit } from '@angular/core';
import { StepService } from "../../services/step.service";

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.sass']
})
export class StepComponent implements OnInit {
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
