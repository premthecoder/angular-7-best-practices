import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  serviceUrl: string = "http://localhost:8080/api/posts";

  constructor(private http: HttpClient) { }

  getPosts():Observable<Post[]>
  {
    return this.http.get<Post[]>(this.serviceUrl);
  }
}
