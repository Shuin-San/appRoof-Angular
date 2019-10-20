import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Courses } from '../shared/Courses';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FetchTrainingsService {

  // define API
  apiURL = 'https://tc.derbigum.be/derbigum/ajson.php';

  constructor(private http: HttpClient) { }

  // http options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  // httpClient API Get() Method => pass lang and course type in method

  getTrainings(lang, type): Observable<Courses> {
    return this.http.get<Courses>('https://cors-anywhere.herokuapp.com/' + this.apiURL + '?langue=' + lang + '&type=' + type)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // start error handling
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
