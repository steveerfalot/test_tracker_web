import { Injectable } from '@angular/core';
import {
  Http, ConnectionBackend, RequestOptionsArgs, Response, RequestOptions, Headers
} from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class BetterHttpService extends Http {

  constructor(_backend:ConnectionBackend, _defaultOptions:RequestOptions) {
    super(_backend, _defaultOptions);
  }

  appendHeaders(request) {
    if (!request) {
      request = new RequestOptions(); // eslint-disable-line
    }

    if (!request.headers) {
      request.headers = new Headers();
    }

    // TODO - put back in with RC.6 - jgodi
    // request.headers.append('Content-Type', 'application/json');
    request.withCredentials = true;
    return request;
  }

  get(url:string, options:RequestOptionsArgs):Observable<Response> {
    return super.get(url, this.appendHeaders(options))
      .map(res => res.json())
      .catch(err => this.handleError(err.json()));
  }

  post(url:string, body:any, options:RequestOptionsArgs):Observable<Response> {
    return super.post(url, body, this.appendHeaders(options))
      .map(res => res.json())
      .catch(err => this.handleError(err.json()));
  }

  put(url:string, body:any, options:RequestOptionsArgs):Observable<Response> {
    return super.put(url, body, this.appendHeaders(options))
      .map(res => res.json())
      .catch(err => this.handleError(err.json()));
  }

  delete(url:string, options:RequestOptionsArgs):Observable<Response> {
    return super.delete(url, this.appendHeaders(options))
      .map(res => res.json())
      .catch(err => this.handleError(err.json()));
  }

  patch(url:string, body:any, options:RequestOptionsArgs):Observable<Response> {
    return super.patch(url, body, this.appendHeaders(options))
      .map(res => res.json())
      .catch(err => this.handleError(err.json()));
  }

  head(url:string, options:RequestOptionsArgs):Observable<Response> {
    return super.head(url, this.appendHeaders(options))
      .map(res => res.json())
      .catch(err => this.handleError(err.json()));
  }

  options(url:string, options:RequestOptionsArgs):Observable<Response> {
    return super.options(url, this.appendHeaders(options))
      .map(res => res.json())
      .catch(err => this.handleError(err.json()));
  }

  handleError(error) {
    return Observable.throw(error);
  }
}
