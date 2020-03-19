import { Injectable } from '@angular/core';
import {Product} from './product';
import {Observable, of} from 'rxjs';
import {products} from './products'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getHeroes(): Observable<Product[]>{
    return of(products);  
  }
}
