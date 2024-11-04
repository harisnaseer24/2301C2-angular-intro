import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  myNum:number=0;
products:any[]=[
  {
    id:1,
    name:"Airbuds",
    image:"./assets/images/1.png",
    price:199,
    qty:0,
    

  },
  {
    id:2,
    name:"Macbook Pro",
    image:"./assets/images/2.jpg",
    price:2499,
    qty:150


  },
  {
    id:3,
    name:"Iphone 16",
    image:"./assets/images/3.jpg",
    price:1199,
qty:150
    

  },
  {
    id:4,
    name:"Iphone 16 pro",
    image:"./assets/images/3.jpg",
    price:1299,
    qty:150
    

  }
]
}
