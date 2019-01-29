import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  product: Product[];
  name = 'snehal';
  price = 123;
  i = 0;
 public errorMsg;
  constructor(private _ProductService: ProductService) { }

  ngOnInit() {
    this.List();
    // this._ProductService.getList().subscribe(res => {console.log(res.docs);  this.name = res.docs[0].name; console.log(this.name)});
    //.subscribe((data : Product[])=>{this.product=data;console.log(data.docs[0]._id);console.log(data.docs[0].name);});
    //res=>{console.log(res.docs)}

  }
  List() {
    /*
     var i = 0; 
    this._ProductService.getList().subscribe(res => {console.log(res.docs); 
        
      this.name = res.docs[i].name; console.log(this.name);
      this.price = res.docs[i].price; console.log(this.price);
      }) 
      */
    //this.name = res.docs[0].name; console.log(this.name)
    //this.price = res.docs[0].price; console.log(this.price)});
    this._ProductService.getList().subscribe((data: any) => {
    this.product = data.docs;
      console.log(data);
      
      //console.log(data.docs[0].name);
      // console.log(this.product.docs[0].name);});
    },error => this.errorMsg = error);
  
 }
}




