import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Module } from '../../model/module';

@Injectable()
export class ModuleService {
  http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  fetchOne(params: any): Observable<Module> {
    return this.http.get(`/api/module/${params.id}`).map(response => response.json());
  }

  fetchModules(): Observable<Module[]> {
    return this.http.get('/api/module').map(response => response.json());
  }

  saveModule(module: Module): Observable<Module> {
    return this.http.post('/api/module', module).map(response => response.json());
  }
}
