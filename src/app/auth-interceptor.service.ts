import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import {throwError} from 'rxjs';
import { catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req, next){
      const clone = req.clone();
      return next.handle(clone).pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse)
  {
    return throwError(`Error: ${error.message}`);
  }
}
