import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  productForm: FormGroup;
  id: any;
  type: string = "Create";

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpService
  ) {
    this.route.paramMap.subscribe((params) => {
      this.id = params['params']['id'];
      if (this.id) {
        this.type = "Update";
        this.getProductDetailById();
      }
    });
    this.initializeForm();
  }

  /**
   * Helper method that assigns the Values to the Form and Updates.
   * @param product 
   */
  initializeForm(product?: any) {
    this.productForm = this.formBuilder.group({
      name: [product ? product.name : ""],
      price: [product ? product.price : ""]
    });
  }

  /**
   * Get Product detail by ID.
   * Update the form with the Data.
   */
  getProductDetailById() {
    this.http.get(`secure/product/${this.id}`).subscribe((res: any) => {
      if (res.status == "success") {
        this.initializeForm(res.docs);
      }
    });
  }

  ngOnInit() {
  }

  /**
   * Helper method to save the data to server.
   * If id is available Call will be update.
   * If id is not available Call will be Create.
   */
  submit() {
    if (this.id) {
      this.update();
    } else {
      this.create();
    }
  }

  /**
   * Helper method that actually communicates UPdate call.,
   * On success redirect back to list page.
   */
  update() {
    this.http.put(`secure/product/${this.id}`, this.productForm.value)
      .subscribe((response) => {
        this.router.navigate(['/products']);
      }, (err) => {
        console.log('err', err);
      });
  }

  /**
   * Helper method that actually communicates Create call.,
   * On success redirect back to list page.
   */
  create() {
    this.http.post('secure/product/', this.productForm.value)
      .subscribe((response) => {
        this.router.navigate(['/products']);
      }, (err) => {
        console.log('err', err);
      });
  }

  /**
   * Helper method to reset the form to Empty.
   */
  clear() {
    this.productForm.reset();
  }
}
