import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface TaskAddData {
  title: string;
  text: string;
}

@Component({
  selector: 'app-task-add-dialog',
  templateUrl: './task-add-dialog.component.html',
  styleUrls: ['./task-add-dialog.component.css']
})
export class TaskAddDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TaskAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskAddData

  ) { }

  ngOnInit() {
  }

}
