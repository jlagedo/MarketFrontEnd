import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService} from './message.service';
import { Task } from './tasks/Task';
import { TASKS } from './mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private messageService: MessageService) { 

  }

  /// get tasks
  getTasks(): Observable<Task[]> {
    this.messageService.add("TaskService: lista de tasks obtida");
    return of(TASKS);
  }

}
