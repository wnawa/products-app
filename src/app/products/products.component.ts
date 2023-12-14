import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  todayDAte = new Date();
  personWeight = 100.5;

  classPageTitle: string = 'text-center';
  stylePageTitle = {
    // 'color':'red',

    margin: 'auto',
  };
  mainThemeColor = 'Green';
  isLogin = true;
  pruductArr = [
    {
      id: 1,
      Name: 'Glasses',
      detail: 'Top Quality Sun glasses polarized',
      imgPath: '../../assets/images/product-1.avif',
      color: 'Green',
      Price: '200$',
    },
    {
      id: 2,
      Name: 'High Chair',
      detail: 'High chair pin wood',
      imgPath: '../../assets/images/product-2.avif',
      color: 'White',
      Price: '200$',
    },
    {
      id: 3,
      Name: 'Nike Shoes',
      detail: 'Sport trainer ',
      imgPath: '../../assets/images/product-3.avif',
      color: 'Red',
      Price: '200$',
    },
    {
      id: 4,
      Name: 'Saniteizers',
      detail: '99,9 percent antibacterial ',
      imgPath: '../../assets/images/product-4.avif',
      color: 'Blue',
      Price: '200$',
    },
    {
      id: 5,
      Name: 'Toy',
      detail: 'Car miniatures',
      imgPath: '../../assets/images/product-5.avif',
      color: 'white',
      Price: '200$',
    },
    {
      id: 6,
      Name: 'Apple smartwatch',
      detail: 'RAM 128 GB.',
      imgPath: '../../assets/images/product-6.avif',
      color: '',
      Price: '200$',
    },

    {
      id: 7,
      Name: 'Headphones',
      detail: 'Dolbey sound system',
      imgPath: '../../assets/images/product-7.avif',
      color: '',
      Price: '200$',
    },
  ];
}
