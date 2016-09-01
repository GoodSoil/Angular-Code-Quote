import {Injectable} from '@angular/core';
import {Http, Jsonp, Response} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class CodeQuoteService {
  constructor(private _jsonp: Http) {}
  private serviceUrl: string = 'https://codequote.azurewebsites.net/quote?url=';

  load(queryString: string): Observable<Response> {
    // TODO: Validation...
    var url = this.serviceUrl + queryString;

    return this._jsonp
               .get(url)
  }
}
