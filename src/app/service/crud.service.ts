import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError,map } from 'rxjs';
import {Product} from '../product';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  UrlApi:string = 'http://127.0.0.1:8000/api/products';
  httpHeaders = new HttpHeaders().set('Content-Type','application/json');
  constructor(private httpClient:HttpClient) { }

  AddProduct(data:Product):Observable<any>
  {
    let App_Url = this.UrlApi;
    return this.httpClient.post(App_Url,data).pipe(catchError(this.HanddleError))
  }

  GetProducts()
  {
    return this.httpClient.get(this.UrlApi);
  }

  GetProduct(id:any):Observable<any>{
    let Url = `${this.UrlApi}/${id}`
    return this.httpClient.get(Url,{headers:this.httpHeaders})
    .pipe(
      map((res:any)=>{
        return res || {}
      }),
      catchError(this.HanddleError))
  }
  UpdateProduct(id:any,data:Product):Observable<any>{
    let Url = `${this.UrlApi}/${id}`
    return this.httpClient.put(Url,data,{headers:this.httpHeaders})
    .pipe(

      catchError(this.HanddleError))
  }
  DeleteProduct(id:any):Observable<any>{
      let Url = `${this.UrlApi}/${id}`;
      return this.httpClient.delete(Url,{headers:this.httpHeaders}).pipe(catchError(this.HanddleError))
  }
  HanddleError(error :HttpErrorResponse)
  {
    let errorMessage = ''
    if(error.error instanceof ErrorEvent)
    {
      errorMessage = error.error.message;
    }
    else{
      errorMessage = `Error Code ${error.status} \n Message${error.message}`
    }
    console.log(errorMessage)
    return throwError(errorMessage)
  }
}
