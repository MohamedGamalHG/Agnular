import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url:string = 'http://127.0.0.1:8000/api/products';
  allUsers:any = [];
  constructor(private http:HttpClient) { }

  getUser():Observable<any>
  {
   return  this.http.get(this.url)
  }
}
