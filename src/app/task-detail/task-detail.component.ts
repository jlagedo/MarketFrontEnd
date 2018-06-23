import { Component, OnInit, Input } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap';

import { Task } from '../tasks/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  public task: Task;
  submitted = false;

  constructor(
    public bsModalRef: BsModalRef,
    private taskService: TaskService
  ) { 
    this.task = new Task;
  }
  
  ngOnInit() {
    
  }

  close(): void {
    this.bsModalRef.hide();
  }

  onSubmit() { 
    let taskReturn = this.taskService.addTask(this.task).subscribe();
    console.info(taskReturn);
    this.submitted = true; 
    this.bsModalRef.hide();
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.task); }
}
