import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  public _id = String;
  constructor(private _ProductService: ProductService, private route: Router,
    private Route: ActivatedRoute) { }

  ngOnInit() 
  {
    this.Route.params.subscribe(params => {
      this._id = params['id'];
      console.log(this._id);
    });
 
  }
  Delete()
  {
    this._ProductService.DeleteProduct(this._id).subscribe((Response)=>{console.log("response is",Response)});
  }

}
