import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map'
import { Response, Http } from "@angular/http";
import { Step } from "../../model/step";

@Injectable()
export class StepService {
  http:Http;

  constructor(http:Http) {
    this.http = http;
  }

  fetchOne(id:number):Observable<Step> {
    return this.http.get(`/api/step/${id}`).map(response => response.json());
  }

  fetchSteps():Observable<Response> {
    return this.http.get('/api/step').map(response => response.json());
  }

  saveStep(step:Step):Observable<Step> {
    return this.http.post('/api/step', step).map(response => response.json());
  }
}
