import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product

  constructor(
    private productService: ProductService, // Use HTTP methods
    private router: Router, // Navigate
    private route: ActivatedRoute, // Get parameter
    ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id') // O sinal de + antes do this converte para valor numerico
    this.productService.readById(id).subscribe(product => {
        this.product = product
    })
  }

  updateProduct(): void {
    // A resposta do update() é um Observable, então temos que subscrever
    this.productService.update(this.product).subscribe(prod => {
      console.log('Alterado com sucesso!', prod)
      this.productService.showMessage('Alterado!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
