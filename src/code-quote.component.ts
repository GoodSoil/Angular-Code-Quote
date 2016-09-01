import {Component, Input} from '@angular/core';
import {CodeQuoteService} from './code-quote.service';

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


@Component({
  selector: 'code-quote',
  template: `
  <div *ngIf='!isLoaded'>Loading code sample...</div>
  <pre *ngIf='isLoaded' class='line-numbers' [attr.data-start]='mycode?.request?.start'><code [attr.class]='lang' pLight>{{mycode?.code}}</code></pre>
  `,
  providers: [CodeQuoteService],
  styles: ['code[class*="language"] { height: inherit; }'] // Hack for overriding prismjs linenumbers css which has the height as 100% 
}) export class CodeQuoteComponent{
  @Input() repo:string;
  private mycode:any = {}
  private lang:string = '';
  private isLoaded:boolean = false;

  constructor(private _codeQuoteService: CodeQuoteService) {}

  ngOnInit() {
    this._codeQuoteService.load(this.hashToQuerystring(this.repo)).subscribe((code:any)=>{
      console.log(JSON.parse(code._body));
      this.mycode = JSON.parse(code._body);
      this.lang = 'language-' + this.mycode.lang;
      this.isLoaded = true;
    });
  }
  
  private hashToQuerystring(url:string):string {
    var urlParts = url.split('#');
    var urlRedirectQuery = urlParts[0];
    if (urlParts.length > 1) {
      var rangeParts = urlParts[1].replace('L','').split('-');
      urlRedirectQuery += "&start=" + rangeParts[0];
      if (rangeParts.length > 1) urlRedirectQuery += "&end=" + rangeParts[1].replace('L', '');
    }
    return urlRedirectQuery;
  }
}
