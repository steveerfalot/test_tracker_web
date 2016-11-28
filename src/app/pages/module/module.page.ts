import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'module-page',
  templateUrl: 'module.page.html',
  styleUrls: ['module.page.sass']
})
export class ModulePage {
  private router:Router;
  private route:ActivatedRoute;

  constructor(router:Router, route:ActivatedRoute) {
    this.router = router;
    this.route = route;
  }

  viewList() {
    this.router.navigate(['module']);
  }

  addStep() {
    this.router.navigate(['form'], { relativeTo: this.route });
  }
}
