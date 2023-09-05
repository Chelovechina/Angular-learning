import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
})
export class CreateProductComponent {
  constructor(
    private productService: ProductsService,
    private modalService: ModalService
  ) { }
  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  get title() {
    return this.form.controls.title as FormControl;
  }

  submit() {
    this.productService
      .create({
        title: this.form.value.title as string,
        price: 13.5,
        description:
          'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
          rate: 4.2,
          count: 1,
        },
      })
      .subscribe(() => {
        this.modalService.close();
      });
  }
}
