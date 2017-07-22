import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Server } from './_models/index';
import { Product } from './_models/index';

@Injectable()
export class ProductsService {
    constructor(private http: Http) { }


    productsData = [{
        'uid': '23554654235325',
        'name': 'Product 1',
        'description': 'Description 1',
        'price': '23.23',
        'manufacturer': "Manufaturer 1",
        'created_at': 2017-12-13,
        'updated_at': 2017-12-13,
        'deleted_at': 2017-12-13
    },
    {
        'uid': '564734563',
        'name': 'Product 2',
        'description': 'Description 2',
        'price': '52.23',
        'manufacturer': "Manufaturer 2",
        'created_at': 2017-12-13,
        'updated_at': 2017-12-13,
        'deleted_at': 2017-12-13
    },
    {
        'uid': '67543345',
        'name': 'Product 3',
        'description': 'Description 3',
        'price': '412.23',
        'manufacturer': "Manufaturer 3",
        'created_at': 2017-12-13,
        'updated_at': 2017-12-13,
        'deleted_at': 2017-12-13
    }];

    getData(): Promise<any> {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(this.productsData);
          }, 1);
        });
    }

    getOne(): Promise<any> {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(this.productsData[0]);
          }, 1);
        });
    }


    categoryData = [{
        'uid': '23554654235325',
        'name': 'Category 1',
        'created_at': 2017-12-13,
        'updated_at': 2017-12-13,
        'deleted_at': 2017-12-13
    },
    {
        'uid': '564734563',
        'name': 'Category 2',
        'created_at': 2017-12-13,
        'updated_at': 2017-12-13,
        'deleted_at': 2017-12-13
    },
    {
        'uid': '67543345',
        'name': 'Category 3',
        'created_at': 2017-12-13,
        'updated_at': 2017-12-13,
        'deleted_at': 2017-12-13
    }];


     getCategoryData(): Promise<any> {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(this.categoryData);
          }, 1);
        });
    }


    getAll() {
        return this.http.get('http://51.255.196.182:3000/item', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('http://51.255.196.182:3000/item/' + id, this.jwt()).map((response: Response) => response.json());
    }

    getCategories(id: number) {
        return this.http.get('http://51.255.196.182:3000/item/category/' + id, this.jwt()).map((response: Response) => response.json());
    }

    refresh(id: string) {
        return this.http.get('http://localhost:4040/api/servers/refresh/' + id, this.jwt()).map((response: Response) => response.json());
    }

    version(id: string) {
        return this.http.get('http://localhost:4040/api/servers/version/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(product: Product) {
        return this.http.post('http://51.255.196.182:3000/item', product, this.jwt()).map((response: Response) => response.json());
    }

    update(product: Product) {
        return this.http.put('http://51.255.196.182:3000/item/' + product.uid, product, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('http://51.255.196.182:3000/item/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods
    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}