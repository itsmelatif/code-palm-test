import { Injectable } from '@angular/core';
import { ICardLink } from 'projects/shortly-lib/src/lib/models/components.model';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { mockLinkList } from '../__mocks__/links';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor() {

  }

  get listLinks$(): Observable<ICardLink[]> {
    return of(mockLinkList);
  }

}
