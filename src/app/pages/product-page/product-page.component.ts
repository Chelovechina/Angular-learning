import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent implements OnInit {
  // products: IProduct[] = [];
  // products$: Observable<IProduct[]>; // using streams

  title = 'angular';
  loading = false;
  term = '';

  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.loading = true;

    // Working with stream
    // this.products$ = this.productsService
    //   .getAll()
    //   .pipe(tap(() => (this.loading = false)));

    this.productsService.getAll().subscribe(() => {
      this.loading = false;
    });
  }
}
