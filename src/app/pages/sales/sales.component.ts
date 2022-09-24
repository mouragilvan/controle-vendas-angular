import { Component, OnInit } from '@angular/core';
import { Sale, sales } from '@app/shared/models/sale';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  public sales = sales;

 

  constructor() { 
       
  }

  ngOnInit(): void {
   
  }

}
