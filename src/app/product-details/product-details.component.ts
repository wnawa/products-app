import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  productId:any;
  constructor(private activatedRout: ActivatedRoute) {
    this.activatedRout.params.subscribe((params) => {
      this.productId = params['id'];
      console.log(this.productId);
    });
  }
}
