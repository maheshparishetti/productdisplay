import { Routes,RouterModule, PreloadAllModules } from "@angular/router";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserGuardService } from './user-guard.service';
import { AppCustomPreloader } from './appcustomepreloader';


const arr : Routes=[
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'customer',data:{preload:true},loadChildren:'./customer/customer.module#CustomerModule'},
  {path:'user1',loadChildren:'./users/users.module#UsersModule'},
  {path:'product',canLoad:[UserGuardService],loadChildren:'./productdisplay/product.module#ProductModule'},
  {path:'pagenotfound',component:PagenotfoundComponent},
  {path:'**',redirectTo:'/pagenotfound'}
];

export const routing=RouterModule.forRoot(arr,{preloadingStrategy:AppCustomPreloader});
