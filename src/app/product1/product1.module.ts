import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Product1Component } from './product1.component';
import { product1routing } from './product1.routing';
@NgModule({
  declarations:[
    Product1Component
  ],
  imports:[
    CommonModule,
    product1routing
  ]
})

export class Product1Module{}
