import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './components/header/header.component';

// bootstrap
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports:      [
    // NgbModule.forRoot(),
    BrowserModule

  ],
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
