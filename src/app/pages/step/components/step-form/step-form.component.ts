import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Step } from './../../model/step';
import { StepService } from '../../services/step-service/step.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.sass']
})
export class StepFormComponent implements OnInit {
  model = new Step(null, '');
  router: Router;
  stepForm: NgForm;
  submitted: boolean = false;
  stepService: StepService;

  constructor(stepService: StepService, router: Router) {
    this.router = router;
    this.stepService = stepService;
  }

  ngOnInit() {
  }

  onSubmit(form) {
    this.stepService.saveStep(form.value).subscribe(savedStep => {
      console.log('savedStep', savedStep);
      let savedId = savedStep.id;
      this.submitted = true;
      this.router.navigate([savedId]);
    });
  }
}
