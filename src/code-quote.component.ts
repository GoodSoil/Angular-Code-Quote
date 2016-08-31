import {Component, Input, Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';
import {AsyncSubject} from 'rxjs/Rx';

interface CodeQuoteResponse {
  code: string,
  lang: string,
  github: {
    download_url: string,
    html_url: string
  },
  request: {
    url: string,
    start: number,
    end: number
  }
}

@Injectable()
class CodeQuoteService{
  constructor(private _jsonp: Jsonp) {}
  private serviceUrl: string = 'https://codequote.azurewebsites.net/quote';

  load(queryString: string) {
    // TODO: Validation...
    var url = this.serviceUrl + queryString;
    // Set URLSearchParams()

    return this._jsonp
               .get(url)
               
  }
}

@Component({
  selector: 'code-quote',
  template: '<pre><code>{{mycode.code}}</code></pre>',
  providers: [CodeQuoteService]
}) export class CodeQuoteComponent{
  constructor(private _codeQuoteService: CodeQuoteService) {}
  // Legacy attribute
  @Input() repo:string;
  private mycode: {}

  
}
