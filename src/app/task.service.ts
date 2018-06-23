import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Task } from './tasks/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private apiPath = '/api_task/api';

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiPath + '/task')
    .pipe(
      tap(tasks => this.log('lista de tasks obt id')),
      catchError(this.handleError('getTasks', []))
    );
  }

  deleteTask(id: string): Observable<Task> {
    const url = this.apiPath + '/task/' + id;
    return this.http.delete<Task>(url)
    .pipe(
      tap(t => this.log('removendo task id:' + id)),
      catchError(this.handleError<Task>('deleteTask'))
    );
  }

  getTask(id: string): Observable<Task> {
    let tasks: Task[];
    return of(tasks.find(t => t.id === id));
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
