import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApproofFilter } from '../shared/approof-filter';
import { LangField } from '../shared/lang-field';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApproofFavsService {

  apiURL = 'https://approof.derbigum.com/api/public/languages/';

  constructor() { }
}
