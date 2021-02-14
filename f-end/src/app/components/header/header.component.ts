import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  burgerMenuOpen: boolean = false;
  toggleHamburger() {
    this.burgerMenuOpen = !this.burgerMenuOpen;
  }
  cartItems = [
    { id: 1, name: 'Rancho', quantity: 1, price: 12 },
    { id: 2, name: 'Peperonni', quantity: 2, price: 24 },
    { id: 3, name: 'Mario', quantity: 1, price: 12 },
    { id: 4, name: 'Mario', quantity: 1, price: 12 },
  ];

  Increment(i: number):any {
    
    for (let x in this.cartItems) {
      if (this.cartItems[x].id === i) {
        return this.cartItems[x].quantity ++;
      }
      console.log(this.cartItems[i].quantity);
    }
  }
  Decrement() {
    // this.counter--
  }
}
