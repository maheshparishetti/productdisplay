import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ProductdisplayComponent } from "./productdisplay.component";
import { ProductaddComponent } from "./productadd/productadd.component";
import { EditproductComponent } from "./editproduct/editproduct.component";
import { SidebarComponent } from '../sidebar/sidebar.component';
import { prodcutrouting } from './product.routing';

@NgModule({
  declarations: [
    ProductdisplayComponent,
    ProductaddComponent,
    EditproductComponent,
    SidebarComponent
  ],
  imports: [CommonModule, FormsModule, prodcutrouting]
})
export class ProductModule {}
