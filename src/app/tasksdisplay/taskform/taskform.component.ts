import { Component, OnInit } from '@angular/core';
import { TaskdataService } from '../taskdata.service';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent implements OnInit {

  constructor(private _data: TaskdataService) {}

  ngOnInit() {}
  onTaskSave(f) {
    //console.log(f);
    this._data.addTask(f.value).subscribe((data: any) => {
      alert("record added");
    });
  }
}
