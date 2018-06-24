import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'MarketFrontEnd';

  taskCount: Number = 0;

  public config: ToasterConfig = 
    new ToasterConfig({
      showCloseButton: false, 
      tapToDismiss: true, 
      timeout: 5000,
      positionClass: 'toast-bottom-right',
      animation: 'slideUp'
  });
  
  constructor(
    private taskService: TaskService
  ){}

  ngOnInit() {
    this.taskService.getTasks().subscribe(
      r => this.taskCount = r.length
    );
  }
}
