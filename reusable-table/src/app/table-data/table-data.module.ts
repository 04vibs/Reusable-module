import { HighlightSearchedTextPipe } from './pipe/highlight-searched-text.pipe';
import { SearchPipe  } from './pipe/search.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableSortComponent } from './table-sort/table-sort.component';
import { TableSearchComponent } from './table-search/table-search.component';
import { TableDataRepresentationComponent } from './table-data-representation/table-data-representation.component';
import { MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directive/highlight.directive';
import { HighlightPipe } from './pipe/highlight.pipe';
import { SearchHighlightPipe } from './pipe/search-highlight.pipe';
import { TextHighlightPipe } from './pipe/text-highlight.pipe';
import { DocPipe } from './pipe/doc.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule
  ],
  declarations: [
    TableSortComponent,
    TableSearchComponent,
    TableDataRepresentationComponent,
    SearchPipe,
    HighlightSearchedTextPipe,
    HighlightDirective,
    HighlightPipe,
    SearchHighlightPipe,
    TextHighlightPipe,
    DocPipe,

  ],
  exports: [
    TableDataRepresentationComponent
  ]
})
export class TableDataModule { }
