import { TableDataModule } from './table-data/table-data.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';


@NgModule({
  declarations: [
    AppComponent,
    DataComponent,

  ],
  imports: [
    BrowserModule,
    TableDataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
