import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
    
  name : String;
  price : String
  constructor(private _ProductService: ProductService) { }

  ngOnInit() {
    //this._ProductService.add('snehal','123').subscribe((Response)=>{console.log("response is",Response)});
    
  }
  add(name : string ,price :String)
  {
    this._ProductService.add(name,price).subscribe((Response)=>{console.log("response is",Response)});
  }

  
  
}