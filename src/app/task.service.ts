import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Task } from './tasks/Task';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public tempTaskList: Task[];

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private apiPath = '/api_task/api';

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiPath + '/task')
    .pipe(
      tap(tasks => {
        this.tempTaskList = tasks;
        this.sortTempList();
      }),
      catchError(this.handleError('getTasks', []))
    );
  }

  deleteTask(id: string): Observable<Task> {
    const url = this.apiPath + '/task/' + id;
    return this.http.delete<Task>(url)
    .pipe(
      tap(t => {
        const deleteId = this.tempTaskList.findIndex(temp => temp.id === id);
        this.tempTaskList.splice(deleteId, 1);
        this.sortTempList();
        this.log('deleted id:' + id);
      }),
      catchError(this.handleError<Task>('deleteTask'))
    );
  }

  addTask(task: Task): Observable<Task> {
    const url = this.apiPath + '/task';
    return this.http.post<Task>(url, task, httpOptions)
    .pipe(
      tap(t => {
        this.tempTaskList.push(t);
        this.sortTempList();
        this.log('task added');
      }),
      catchError(this.handleError<Task>('addTask'))
    );
  }

  getTask(id: string): Observable<Task> {
    let tasks: Task[];
    return of(tasks.find(t => t.id === id));
  }

  // getTotalTaskCount(): number {
  //   let tasksToCount: Task[];
  //   this.http.get<Task[]>(this.apiPath + '/task')
  //   .pipe(
  //     tap(tasks => {
  //       tasksToCount = tasks;
  //       this.log('getTotalTaskCount');
  //     }),
  //     catchError(this.handleError('getTasks', []))
  //   ).subscribe(t => tasksToCount = t);
  //   console.log(tasksToCount);
  //   return tasksToCount.length;
  // }

  private sortTempList() {
    this.tempTaskList = this.tempTaskList.sort((n1 , n2) => {
      if (n1.registerDate > n2.registerDate) {
        return -1;
      }

      if (n1.registerDate < n2.registerDate) {
          return 1;
      }

      return 0;
    });
  }

  private log(message: string) {
    this.messageService.add('TaskService: ' + message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
