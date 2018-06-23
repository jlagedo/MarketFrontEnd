import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Task } from './Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  listTasks: Task[];
  bsModalRef: BsModalRef;
  selectedTask: Task;

  constructor(
    private taskService: TaskService,
    private bsModalService: BsModalService
  ) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(ret => this.listTasks = ret);
  }

  openModal(template: TemplateRef<any>, task: Task) {
    this.selectedTask = task;
    this.bsModalRef = this.bsModalService.show(template);
  }

  confirmaExcluir() {

  }

  declinaExcluir() {
    this.selectedTask = null;
    this.bsModalRef.hide();
  }
}
