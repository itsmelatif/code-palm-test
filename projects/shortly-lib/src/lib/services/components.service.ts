import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  private notification: Subject<string> = new Subject<string>();

  constructor(
    private http: HttpClient
  ) { }

  get getNotification(): Observable<string>{
    return this.notification;
  }

  showNotifcation(message: string){
    this.notification.next(message);
  }

  loadSvg(filePath: string): Observable<any> {
    return this.http.get(filePath, { responseType: 'text' })
  }
}
