import { Component, OnInit } from '@angular/core';
import { StepService } from '../../services/step-service/step.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-step-list',
  templateUrl: './step-list.component.html',
  styleUrls: ['./step-list.component.sass']
})
export class StepListComponent implements OnInit {
  route: ActivatedRoute;
  router: Router;
  stepService: StepService;
  steps: any[];

  constructor(stepService: StepService, router: Router, route: ActivatedRoute) {
    this.route = route;
    this.router = router;
    this.stepService = stepService;
  }

  ngOnInit() {
    this.stepService.fetchSteps().subscribe((response: any) => {
      this.steps = response;
    });
  }

  view(id: number) {
    this.router.navigate([`step/${id}`]);
  }
}
