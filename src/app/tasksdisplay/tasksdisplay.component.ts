import { Component, OnInit } from '@angular/core';
import { TaskdataService } from './Taskdata.service';
import { Task } from './task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasksdisplay',
  templateUrl: './tasksdisplay.component.html',
  styleUrls: ['./tasksdisplay.component.css']
})
export class TasksdisplayComponent implements OnInit {
  arr:Task[]=[];
  constructor(private _data: TaskdataService, private _router:Router) { }
  ngOnInit() {
    this._data.getAllTasks().subscribe (
        (data:Task[])=>{
        this.arr = data;
      }
    );

 }
 onTaskDelete(item:Task){
  this._data.deleteTask(item.Id).subscribe(
    (data:any)=>{
      this.arr.splice(this.arr.indexOf(item),1);
      alert('deleted');
    }
  );
}
onTaskEdit(item:Task){
  this._router.navigate(['/edittask',item.Id]);
}
onSearch(value) {
  // tslint:disable-next-line: triple-equals
  if (value != '') {
    // tslint:disable-next-line: triple-equals
    this.arr = this.arr.filter(x => x.Title.indexOf(value) != -1);
  } else {
    this._data.getAllTasks().subscribe(
      (data: Task[]) => {
        this.arr = data;
      },
      // tslint:disable-next-line: only-arrow-functions
      function(error) {
        alert(error);
      },
      // tslint:disable-next-line: only-arrow-functions
      function() {}
    );
  }
}
}



