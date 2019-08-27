import { Routes,RouterModule } from "@angular/router";

import { ProductResolverService } from '../product-resolver.service';
import { Product1Component } from './product1.component';
const arr : Routes=[
 {path:'product1',resolve:{pdata:ProductResolverService},component:Product1Component}
];
export const product1routing=RouterModule.forChild(arr);
