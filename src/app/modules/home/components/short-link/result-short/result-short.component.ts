import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICardLink } from 'projects/shortly-lib/src/lib/models/components.model';
import { Clipboard } from '@angular/cdk/clipboard';
import { LinkService } from '../../../services/link.service';
import { Subscription } from 'rxjs'
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-result-short',
  templateUrl: './result-short.component.html',
  styleUrls: ['./result-short.component.scss']
})
export class ResultShortComponent implements OnInit, OnDestroy {
  isLoading = false;
  listResults: ICardLink [] = [];
  listSubscription: Subscription[] = [];

  constructor(
    private clipboard: Clipboard,
    private _linkService: LinkService
  ){

  }

  ngOnInit(): void {
      this.onLoadResults();
  }

  ngOnDestroy(): void {
      this.listSubscription.forEach(el => el.unsubscribe());
  }

  onLoadResults(){
    this.isLoading = !this.isLoading;

    const subsResults = this._linkService.listLinks.pipe(
      finalize(() => {
        this.isLoading = this.isLoading;
      })
    ).subscribe({
      next: (res) => {
        this.listResults = [res, ...this.listResults];
      },
      error: (e) => {
        alert(e)
      }
    });

    this.listSubscription.push(subsResults);
  }

  onCopy(data: string){
    this.clipboard.copy(data);
  }
}
