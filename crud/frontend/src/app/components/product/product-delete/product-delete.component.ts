import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product

  constructor(
    private productService: ProductService, // HTTP methods
    private router: Router, // Navigate
    private route: ActivatedRoute // Get param
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id') // O sinal de + antes do this converte para valor numerico
    this.productService.readById(id).subscribe(prod => {
      this.product = prod
    })
  }

  deleteProduct(): void {
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMessage(`Produto excluído com sucesso!`)
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
