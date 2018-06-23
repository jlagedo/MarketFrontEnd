import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'MarketFrontEnd';

  taskCount: Number = 0;
  
  constructor(
    private taskService: TaskService
  ){}

  ngOnInit() {
    this.taskService.getTasks().subscribe(
      r => this.taskCount = r.length
    );
  }
}
