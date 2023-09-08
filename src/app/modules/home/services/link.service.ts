import { Injectable } from '@angular/core';
import { ICardLink } from 'projects/shortly-lib/src/lib/models/components.model';
import { Observable, Subject } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EndPontConstant } from 'src/app/models/contants/endpoint';
import { ICommonResonse } from 'src/app/models/interfaces/common-response';
import { IShortenResponse } from '../models/interfaces/shorten-response';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  private link: Subject<ICardLink> = new Subject<ICardLink>();

  constructor(
    private http: HttpClient
  ) {

  }

  shortenUrl(url: string): Observable<ICommonResonse<IShortenResponse>>{
    const params = new HttpParams()
    .set('url', url);

    return this.http.get<ICommonResonse<IShortenResponse>>(EndPontConstant.SHORTEN_URL, {params})
  }

  get listLinks(): Observable<ICardLink> {
    return this.link
  }

  updateLinks(item: ICardLink){
    this.link.next(item);
  }

}
