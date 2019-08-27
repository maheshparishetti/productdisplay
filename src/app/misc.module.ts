import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { miscrouting } from './misc.routing';
@NgModule({
  declarations:[
    DemoComponent,
    Demo1Component,
    Demo2Component,
  ],
  imports:[CommonModule,miscrouting]
})

export class MiscModule{}
