import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {ProductsService} from '../../products.service';



@Component({
  selector: 'categories-list',
  templateUrl: './categories.html',
})

export class Categories {

  categories:any;
  productId:any;
  categoryId:any;

  constructor(private route: ActivatedRoute,
  private _productsService: ProductsService) {
  }

  // TODO angular-async-local-storage

  ngOnInit() {
  this.route.params.subscribe(params => {
   this.productId = params['item'];
   this.categoryId = params['category'];
    this._productsService.getCategories(this.categoryId)
     .subscribe(
        data => {
            this.categories = data;
        },
        error => {
            console.log(error);
        });
    });
	}

 

}
