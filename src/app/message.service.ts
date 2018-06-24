import { Injectable } from '@angular/core';
import { ToasterService } from 'angular2-toaster';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  constructor(
    private toastService: ToasterService
  ) { }
  add(message: string) {
    //error info wait success warning
    this.toastService.pop('info', 'Information', message);
  }

  addError(message: string) {
    //error info wait success warning
    this.toastService.pop('error', 'Sorry, something went wrong', message);
  }

  clear() {
    this.messages = [];
  }
}
