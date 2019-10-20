import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserInfo } from './user-info';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  apiURL = 'http://hdls.derbigum.com/backend';
  user;

  constructor(private httpClient: HttpClient) {}

  updateUser(id: number) {}


  getUser(id: number) {
    return this.httpClient.get(`${this.apiURL}/user.php?userID=${id}`)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  postUser(id: number) {
    return this.httpClient.post(`${this.apiURL}/user.php`, id);
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
