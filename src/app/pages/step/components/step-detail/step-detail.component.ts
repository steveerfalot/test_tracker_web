// NG2
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// App
import { Step } from "./../../model/step";
import { StepService } from "./../../services/step-service/step.service";

@Component({
  selector: 'app-step-detail',
  templateUrl: './step-detail.component.html',
  styleUrls: ['./step-detail.component.sass']
})
export class StepDetailComponent implements OnInit {
  loading:boolean = true;
  route:ActivatedRoute;
  step:Step;
  stepService:StepService;

  constructor(route:ActivatedRoute, stepService:StepService) {
    this.route = route;
    this.stepService = stepService;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.stepService.fetchOne(params).subscribe(step => {
        this.step = step;
        this.loading = false;
      });
    });
  }

}
