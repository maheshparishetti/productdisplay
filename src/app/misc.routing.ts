import { Routes,RouterModule } from "@angular/router";
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';

const arr : Routes=[
 {path:'demo',component:DemoComponent},
 {path:'demo1/:id',component:Demo1Component},
 {path:'demo2',component:Demo2Component}
];
export const miscrouting=RouterModule.forChild(arr);
