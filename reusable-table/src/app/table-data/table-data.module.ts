import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableSortComponent } from './table-sort/table-sort.component';
import { TableSearchComponent } from './table-search/table-search.component';
import { TableDataRepresentationComponent } from './table-data-representation/table-data-representation.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TableSortComponent,
    TableSearchComponent,
    TableDataRepresentationComponent,
    SearchPipe
  ],
  exports: [
    TableDataRepresentationComponent
  ]
})
export class TableDataModule { }
