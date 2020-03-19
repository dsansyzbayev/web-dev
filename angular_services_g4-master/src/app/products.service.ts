import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { CATEGORIES_WITH_PRODUCTS } from './categories';
import { ALL_PRODUCTS } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  serviceCategoriesWithProducts = CATEGORIES_WITH_PRODUCTS;
  allProducts = ALL_PRODUCTS;

  getCategories(): Observable<any> {
    return of(this.serviceCategoriesWithProducts);
  }

  getProductsByCategoryId(categoryId): Observable<any> {
    const neededCategory = this.serviceCategoriesWithProducts.find(category => category.id === categoryId);
    return of(neededCategory.products);
  }

  getFromAllProductsByCategoryId(categoryId): Observable<any> {
    const neededProducts = this.allProducts.filter(product => product.categoryId === categoryId);
    return of(neededProducts);
  }

  getProductById(id): Observable<any> {
    const neededProduct = this.allProducts.find(product => product.id === id);
    return of(neededProduct)
  }

}
