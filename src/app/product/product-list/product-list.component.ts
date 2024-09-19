import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit
 {

//  products = [

//   {productId: 50, productName: 'Microscopes'},
//   {productId: 51, productName: 'Pippet'},
//   {productId: 52, productName: 'Centrifuges'},
//   {productId: 53, productName: 'Incubators'}

// ]
products!:any [];
constructor(private prductservice: ProductService) {
  
  console.log('ProductListComponent')
}
  ngOnInit(): void {
    console.log('init');
    // this.products= this.prductservice.getProducts();
    this.prductservice.getProducts().then((res:any)=>{
      this.products=res.data;
    })
  console.log(this.products);
  }

}
