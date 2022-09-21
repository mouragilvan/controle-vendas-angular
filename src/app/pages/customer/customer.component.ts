import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { customers } from '@app/shared/models/customer-mock';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  public customer = customers[0];
  myform: FormGroup;

  constructor() {

  }

  ngOnInit(): void {
    this.myform = new FormGroup({
      // name: new FormGroup({
      //     firstName: new FormControl('', Validators.required), 
      //     lastName: new FormControl('', Validators.required),
      // }),
      name: new FormControl(this.customer.name, [
        Validators.required
      ]),
      email: new FormControl(this.customer.email, [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]),
      address: new FormControl(this.customer.address.address, [
        Validators.required
      ]),
      district: new FormControl(this.customer.address.district, [
        Validators.required
      ]),
      number: new FormControl(this.customer.address.number, [
        Validators.required
      ]),

    });
  }

}
