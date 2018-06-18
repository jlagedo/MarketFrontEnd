import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Task } from '../tasks/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Input() task: Task;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTask();
  }

  getTask(): void {
    // * converte string para number
    const id = this.route.snapshot.paramMap.get("id");
    this.taskService.getTask(id)
      .subscribe(r => this.task = r);
  }

  goBack(): void {
    this.location.back();
  }
}
