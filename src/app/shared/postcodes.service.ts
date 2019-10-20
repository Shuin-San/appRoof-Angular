import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Postcode } from '../shared/postcode';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostcodesService {

  // define data file
  jsonFile = '../assets/data/postcode.json';

  constructor(private http: HttpClient) { }

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };

    // httpClient API get() method => fetch postcode list

    getCodes(): Observable<Postcode> {
      return this.http.get<Postcode>(this.jsonFile)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
    }

    handleError(error) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // get client side error
        errorMessage = error.error.message;
      } else {
        // get server side error
        errorMessage = `error code : ${error.status}\nMessage : ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
      }
  }



