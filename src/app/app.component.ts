import { Component, OnInit, NgZone } from '@angular/core';
import { TaskService } from './task.service';
import { ToasterConfig } from 'angular2-toaster';
import { GoogleAuthServiceService } from './google-auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'MarketFrontEnd';
  isCollapsed = true;
  taskCount: Number = 0;

  public config: ToasterConfig =
    new ToasterConfig({
      showCloseButton: false,
      tapToDismiss: true,
      timeout: 5000,
      positionClass: 'toast-bottom-center',
      animation: 'slideUp'
  });

  constructor(
    private taskService: TaskService,
    private googleAuthService: GoogleAuthServiceService,
    private zone: NgZone
  ){ 
    window['angularComponentRef'] = {
      zone: this.zone,
      componentFn: (value) => this.googleSing(value),
      component: this
    }
  }
  public googleSing(value: any){
    this.googleAuthService.logIn(value);
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe(
      r => this.taskCount = r.length
    );
  }
}
