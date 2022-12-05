import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl:string = 'https://jsonplaceholder.typicode.com/posts';
  posts:Post[] = [];

  constructor(private http:HttpClient) { }

  getInfo():Observable<any>{
    return this.http.get(this.baseUrl);
  }


}
