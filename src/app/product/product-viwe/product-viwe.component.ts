import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-viwe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-viwe.component.html',
  styleUrl: './product-viwe.component.css'
})
export class ProductViweComponent {

id!: number;

products = [

  {productId: 50, productName: 'Microscopes'},
  {productId: 51, productName: 'Pippet'},
  {productId: 52, productName: 'Centrifuges'},
  {productId: 53, productName: 'Incubators'}

]

selectedProduct!: any;

constructor(private route: ActivatedRoute){
  console.log('ViewProductComponent constructor called');
  this.id = this.route.snapshot.params["id"];
  console.log('Id', this.id);

  // Fillter the product by id
  this.selectedProduct = this.products.find(obj=>obj.productId == this.id);
}

}
