import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApproofFilter } from '../shared/approof-filter';
import { LangField } from '../shared/lang-field';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApproofServiceService {

  // define API
  language = 'nl-BE';
  apiURL = 'https://approof.derbigum.com/api/public/languages/';
  languageAPI = '../assets/data/langfields.json';
  solutionURL = 'https://approof.derbigum.com/api/public/predefinedsolutions/';

  constructor(private http: HttpClient) { }

  // http options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  // httpClient API Get() Method => pass lang and course type in method

  getFilters(lang): Observable<ApproofFilter> {
    return this.http.get<ApproofFilter>(this.apiURL + lang + '/filters')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getLangFields(lang): Observable<LangField> {
    return this.http.get<LangField>(this.languageAPI)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getResults(payload) {
    return this.http.get(payload)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getSolution(id) {
    return this.http.get(this.solutionURL + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }


  // getLangFields(lang){
  //   fetch(this.languageAPI)
  //   .then((resp) => resp.json())
  //   .then(function(data) {
  //     console.log(data[lang]);
  //     return data[lang];
  //   })
  //   .catch(function(error){
  //       alert(error);
  //     });
  // }

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
