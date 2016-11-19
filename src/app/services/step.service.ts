import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { BetterHttpService } from "./better-http.service";

@Injectable()
export class StepService {
  http:BetterHttpService;
  restUrl:String;

  constructor(http:BetterHttpService) {
    this.http = http;
  }

  ngOnInit() {
    this.restUrl = 'http://localhost:8190';
  }

  fetchSteps() {
    console.log('fetch the damn steps!!!!!!');
    return new Promise(resolve => {
      this.http.get('/steps', {})
        .subscribe(response => {
          console.log('Here is the damn response you asked:', response);
          resolve(response);
        });
    });
  }

}
