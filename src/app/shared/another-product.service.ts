import { Injectable } from '@angular/core';
import {Product, ProductService} from './product.service';
import {LoggerService} from "./logger.service";

@Injectable()
export class AnotherProductService  {

  getProduct(): Product {
    return new Product(1, 'iphone8', 8899, '最新款');
  }
  constructor() { }

}
