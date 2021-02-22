import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = "Katyushka";

  number = 10;

  arrNumber = [10, 40, 60, 50];

  products = [{
    name: 'Product 1',
    price: 15,
    isStock: true
  },{
    name: 'Product 2',
    price: 10,
    isStock: true
  },{
    name: 'Product 3',
    price: 35,
    isStock: false
  },{
    name: 'Product 4',
    price: 85,
    isStock: true
  }];

  isOpenMenu = false;

  openDropdown(){
    this.isOpenMenu = !this.isOpenMenu;
  }

  addProduct() {
    this.products.push({
      name: 'Product 5',
      price: 35,
      isStock: true
    });

   
  }
}
