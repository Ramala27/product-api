import { Injectable } from '@angular/core';
import axios, { Axios } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // products = [

  //   {productId: 50, productName: 'Microscopes'},
  //   {productId: 51, productName: 'Pippet'},
  //   {productId: 52, productName: 'Centrifuges'},
  //   {productId: 53, productName: 'Incubators'},
  //   {productId: 54, productName: 'glassware'}
  // ]

  constructor() { 


  }
  getProducts(){
    // return this.products;
    const url= "http://localhost:3000/products";
    return axios.get(url);
  }
  addProduct(productId:number, productName:string){
    const product = {
      "id":productId,
      "productName":productName
    };
    console.log(product);
    // this.products.push(product);
    const url= "http://localhost:3000/products";
    return axios.post(url,product);
  }
}
