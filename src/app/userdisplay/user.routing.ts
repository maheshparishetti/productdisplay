import { Routes,RouterModule } from "@angular/router";
import { SignupComponent } from './signup/signup.component';
import { EdituserComponent } from './edituser/edituser.component';
import { UserdisplayComponent } from './userdisplay.component';
import { SignupReactiveDemoComponent } from './signup-reactive-demo/signup-reactive-demo.component';
import { EdiuserreactiveComponent } from './ediuserreactive/ediuserreactive.component';
const arr : Routes=[
{path:'signup',component:SignupComponent},
{path:'edituser/:user_email',component:EdituserComponent},
{path:'users',component:UserdisplayComponent},
{path:'signup2',component:SignupReactiveDemoComponent},
{path:'edituserreactive/:user_email',component:EdiuserreactiveComponent},
];
export const userrouting=RouterModule.forChild(arr);
