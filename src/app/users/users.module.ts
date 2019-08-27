import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersComponent } from './users.component';
import { usersrouting } from './users.routing';

@NgModule({
  declarations:[
    UsersComponent
  ],
  imports:[
    CommonModule,
    usersrouting
  ]
})

export class UsersModule{}
