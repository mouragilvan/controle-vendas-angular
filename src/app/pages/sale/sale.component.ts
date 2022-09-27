import { Component, OnInit } from '@angular/core';
import { Product } from '@app/shared/models/product';
import { products } from '@app/shared/models/product-mock';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {

  products = products;
  itemSelected: Product[] = [];

  myform: FormGroup;

  constructor() {

  }

  search() {
    let name = this.myform.value.name;
    name = name.trim();
    if(name==""){
      this.itemSelected = [];
      return;
    }
    let product = this.products.find((p) => {
      if (p.name.indexOf(name) != -1) {
        return p;
      } else {
        null;
      }
    });
    if (product !=null) {
      
      this.itemSelected.push(product);

      //Remover duplicidades
      this.itemSelected = this.itemSelected.reduce((acc, curr) => {
        if(acc.find(item => item.name === curr.name)) return acc;
        return [...acc, curr]
      }, []);

    }else{

      this.itemSelected = [];
    }

  }

  ngOnInit(): void {
    this.myform = new FormGroup({
      name: new FormControl('', [

      ]),

    });
  }

}
