import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsService } from '../../services/components.service';
import { Subscription, tap } from 'rxjs';

@Component({
  selector: 'lib-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, OnDestroy {
  isShow = false;
  message = '';
  timeoutId: any;
  subscription: Subscription[] = [];

  constructor(
    private componentsService: ComponentsService
  ){

  }

  ngOnInit(): void {
    this.showNotification();
  }

  ngOnDestroy(): void {
      this.subscription.forEach(el => el.unsubscribe());
  }

  showNotification(){
    const subsNotification = this.componentsService.getNotification
    .pipe(
      tap(() => {
        if(this.timeoutId){
          clearTimeout(this.timeoutId);
        }

        this.isShow = false;
      })
    )
    .subscribe({
      next: (res) => {
        this.isShow = true;
        this.message = res;

        this.timeoutId = setTimeout(() => {
          this.isShow = false;
        }, 5000)

      },
      error: (err) => {

      },
      complete: () => {
        console.log('res');
      }
    })

    this.subscription.push(subsNotification);
  }
}
