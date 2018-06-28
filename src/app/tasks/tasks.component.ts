import { Component, OnInit, Inject } from '@angular/core';
import { Task } from './Task';
import { TaskService } from '../task.service';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { TaskAddDialogComponent, TaskAddData } from '../task-add-dialog/task-add-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-tasks',
  providers: [TaskDetailComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  listTasks: Task[];
  selectedTask: Task;

  constructor(
    public taskService: TaskService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(ret => this.listTasks = ret);
  }

  openModalAdd() {
    const dialogRef = this.dialog.open(TaskAddDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
    //this.bsModalRef = this.bsModalService.show(TaskDetailComponent, options);
  }

  confirmaExcluir() {
    this.taskService.deleteTask(this.selectedTask.id).subscribe();
    this.selectedTask = null;
    //this.bsModalRef.hide();
  }

  declinaExcluir() {
    this.selectedTask = null;
    //this.bsModalRef.hide();
  }
}
