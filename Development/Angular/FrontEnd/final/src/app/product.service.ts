import { Injectable } from '@angular/core';
import { Observable , of, observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import {Product} from './product';
import {Response} from '@angular/http';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = "http://localhost:8080/secure/products";
  urladd = "http://localhost:8080/secure/product";
  url1 = "http://localhost:8080/secure/product";
 

  constructor(private http : HttpClient) { }

  public addProduct(data:any){
    this.http.post(`${this.urladd}`,data);
  }
  
  add(name,price)
  {
    return this.http.post(`${this.urladd}`, {'name' : name, 'price' : price});
  }
     
    getList()
    {
      return this.http.get(`${this.url}`).pipe(catchError(this.errorhandler));
    }

    EditList(id : any,  name :String , price : String)
    { 
      return this.http.put(this.url1 + '/'+ id ,{'name' : name , 'price' : price});
    }

    DeleteProduct(id)
    {
      return this.http.delete(`${this.url1}` + '/' +id);
    }    
    
    FindOne(id)
    {
      return this.http.get(`${this.url1}` + '/' + id);
    }
   
     errorhandler(error : HttpErrorResponse, res:any){
           return res.throw(error.message);
           
    }
   
    
}
