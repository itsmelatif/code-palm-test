import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  private notification: Subject<string> = new Subject<string>();

  constructor() { }

  get getNotification(): Observable<string>{
    return this.notification;
  }

  showNotifcation(message: string){
    console.log(message);
    this.notification.next(message);
  }
}
