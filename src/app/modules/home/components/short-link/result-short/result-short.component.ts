import { Component } from '@angular/core';
import { ICardLink } from 'projects/shortly-lib/src/lib/models/components.model';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-result-short',
  templateUrl: './result-short.component.html',
  styleUrls: ['./result-short.component.scss']
})
export class ResultShortComponent {
  listResults: ICardLink = {
    rawUrl: 'https://brimvoid.com',
    shortUrl: 'https://re.link/siduia'
  }

  constructor(private clipboard: Clipboard){

  }

  onCopy(data: string){
    this.clipboard.copy(data);
  }
}
