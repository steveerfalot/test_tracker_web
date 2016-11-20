import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map'
import { Response, Http } from "@angular/http";

@Injectable()
export class StepService {
  http:Http;

  constructor(http:Http) {
    this.http = http;
  }

  fetchSteps():Observable<Response> {
    return this.http.get('/api/step').map(response => response.json());
  }

}
