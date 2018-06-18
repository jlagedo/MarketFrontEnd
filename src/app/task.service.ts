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

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>("http://localhost:51161/api/task")
    .pipe( 
      tap(tasks => this.log("lista de tasks obtid")),
      catchError(this.handleError('getTasks', []))      
    );
  }

  getTask(id: string): Observable<Task> {

    var tasks: Task[];
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
