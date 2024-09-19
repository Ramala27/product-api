import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
  productId!:number;
  productName!:string;
  constructor(private productservice:ProductService){
    console.log('ProductAddComponent');
    
  }
onSubmit(){
  alert('button clicked');
  console.log('productid',this.productId);
  console.log('productname',this.productName);
  this.productservice.addProduct(this.productId,this.productName).then((res:any)=>{
    console.log('added product');
    alert('add product');
    window.location.href="/products";
  })

}
}
