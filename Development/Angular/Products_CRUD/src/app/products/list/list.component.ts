import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products: any[];
  constructor(
    private http: HttpService
  ) { }

  ngOnInit() {
    this.getAllProducts();
  }

  /**
   * Helper method that retrives all the products.
   */
  getAllProducts() {
    this.products = [];
    this.http.get('secure/products/').subscribe((res: any) => {
      this.products = res.docs;
    });
  }

  /**
   * Helper method that removes the product.
   */
  deleteProduct(productId) {
    this.http.delete(`secure/product/${productId}`).subscribe(res => this.getAllProducts());
  }
}
