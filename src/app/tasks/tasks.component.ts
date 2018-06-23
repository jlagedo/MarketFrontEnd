import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap';
import { Task } from './Task';
import { TaskService } from '../task.service';
import { TaskDetailComponent } from '../task-detail/task-detail.component'

@Component({
  selector: 'app-tasks',
  providers: [TaskDetailComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  listTasks: Task[];
  bsModalRef: BsModalRef;
  selectedTask: Task;

  constructor(
    public taskService: TaskService,
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

  openModalAdd(template: TemplateRef<any>) {
    let options = Object.assign({}, { class: 'modal-dialog modal-dialog-centered' });
    this.bsModalRef = this.bsModalService.show(TaskDetailComponent, options);
  }

  confirmaExcluir() {
    this.taskService.deleteTask(this.selectedTask.id).subscribe();
    this.selectedTask = null;
    this.bsModalRef.hide();      
  }

  declinaExcluir() {
    this.selectedTask = null;
    this.bsModalRef.hide();
  }
}
