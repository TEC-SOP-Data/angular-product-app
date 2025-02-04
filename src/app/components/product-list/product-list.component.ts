import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // Husk FormsModule for ngModel
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [];
  newPrices: { [key: number]: number } = {}; // Holder styr på midlertidige priser

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  editPrice(product: Product) {
    const newPrice = this.newPrices[product.id]; // Hent den indtastede pris

    if (!newPrice || newPrice <= 0) {
      alert('Indtast en gyldig pris!');
      return;
    }

    const updatedProduct = { ...product, price: newPrice };

    this.productService.updateProduct(updatedProduct).subscribe(() => {
      product.price = newPrice; // Opdater UI
      delete this.newPrices[product.id]; // Ryd inputfeltet
    }, error => {
      console.error('Fejl ved opdatering:', error);
      alert('Kunne ikke opdatere produktet.');
    });
  }
}
