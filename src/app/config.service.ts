import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, tap, map, mergeMap} from 'rxjs/operators';

@Injectable()
export class ConfigService {

  private baseApiUrl = "https://api.github.com/search/repositories?q=";
  
  constructor(private http: HttpClient) { }
  
  getConfig( keyWord: string ) {
    return this.http.get(`${this.baseApiUrl}${keyWord}`)
    .pipe(
      catchError(error => this.handleError(error))
    );
  }


  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  } 
  /* getBookMarks<T>(endpoint: string) : Observable<T> {
    return this.http.get<any>(`${this.baseApiUrl}/${endpoint}`,
      {
        headers: this.getHttpHeaders(),
        observe: 'response',
      })
    .pipe(
      catchError(this.handleError),
      map(resp => resp.items)
    );
  }

  private getHttpHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  } */
}
