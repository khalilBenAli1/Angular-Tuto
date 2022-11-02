import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });
  onSubmit():void{
    this.items=this.cartService.clearCart();
    alert('Your order has been submitted'+" Name: "+this.checkoutForm.value.name+" , address: "+this.checkoutForm.value.address);
    console.log(this.checkoutForm.value)
    this.checkoutForm.reset();
    this.router.navigate([''])

  }

  ngOnInit(): void {}
}
