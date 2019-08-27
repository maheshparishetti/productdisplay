import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdisplay/userdata.service';
import { User, UserResolved } from '../userdisplay/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userArr:User[]=[];
  userData:UserResolved;
  errorMessage:String='';
  constructor(private _userdata:UserdataService,private _actroute:ActivatedRoute) {

   this.userData= this._actroute.snapshot.data["uData"];
  }

  ngOnInit() {
      this.userArr=this.userData.data;
      this.errorMessage=this.userData.errorMessage;
  }

}
