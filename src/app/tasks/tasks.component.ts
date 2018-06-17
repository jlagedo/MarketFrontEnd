import { Component, OnInit } from '@angular/core';
import { Task } from './Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  listTasks: Task[];

  selectedTask: Task;

  constructor(private taskService: TaskService) { 

  }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void{
    this.taskService.getTasks()
      .subscribe(ret => this.listTasks = ret);
  }

  onSelect(task: Task): void{
    this.selectedTask = task;
  }

}
