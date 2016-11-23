import { Component } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'step-page',
  templateUrl: './step.page.html',
  styleUrls: ['./step.page.sass']
})
export class StepPage {
  private router:Router;
  private route:ActivatedRoute;

  constructor(router:Router, route:ActivatedRoute) {
    this.router = router;
    this.route = route;
  }

  viewList() {
    this.router.navigate(['step']);
  }

  addStep() {
    this.router.navigate(['form'], { relativeTo: this.route });
  }
}
