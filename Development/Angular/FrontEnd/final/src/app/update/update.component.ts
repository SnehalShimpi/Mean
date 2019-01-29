import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import{Product} from '../product';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public _id = String;
  public ProductName: String;
  public Price: String;

  constructor(private _ProductService: ProductService,
    private route: Router,
    private Route: ActivatedRoute) { }

  ngOnInit() {
    this.Route.params.subscribe(params => {
      this._id = params['id'];
      console.log(this._id);
      
    });
    this.Route.params.subscribe(params => {
      this.ProductName = params['name'];
      console.log(this.ProductName);
      
    });
    this.Route.params.subscribe(params => {
      this.Price = params['price'];
      console.log(this.Price);
      
    });



  }
   
  UpdateData(name : string , price :string)
   {
     console.log(name);
     console.log(price);
     
     this._ProductService.EditList(this._id,name,price).subscribe((Response)=>{console.log("response is",Response)});
   }
}

