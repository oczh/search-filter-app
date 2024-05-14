import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowArrayPipe } from './show-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    CardComponent,
    ShowArrayPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
