import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-findone',
  templateUrl: './findone.component.html',
  styleUrls: ['./findone.component.css']
})
export class FindoneComponent implements OnInit {

  constructor(private _ProductService : ProductService,private route: Router,
    private Route: ActivatedRoute) { }

  ngOnInit() {
  }

}
