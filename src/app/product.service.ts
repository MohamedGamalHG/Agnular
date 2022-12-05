import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product:Product[] = [
    new Product(1,'book',20,'books good'),
    new Product(2,'book 2',30,'books good'),
    new Product(3,'book 3',40,'books good'),
    new Product(4,'book 40',50,'books good'),
  ];

  constructor(){}
  getData()
  {
    this.product = [
      new Product(1,'book',20,'books good'),
      new Product(2,'book 2',30,'books good'),
      new Product(3,'book 3',40,'books good'),
      new Product(4,'book 40',50,'books good'),
    ];

    return this.product;
  }

  getProductById(id:any)
  {
    return this.product.filter(e=>e.id === id);
  }
}
