import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrismHighlighter } from './prism-highlighter.directive';
import { CodeQuoteComponent } from './code-quote.component';
import { CodeQuoteService } from './code-quote.service';

@NgModule({
    imports: [CommonModule],
    exports: [CodeQuoteComponent],
    declarations: [PrismHighlighter,CodeQuoteComponent],
    providers: [CodeQuoteService]
})
export class CodeQuoteModule { }
