import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularSlidesModule } from 'ng-slides';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularSlidesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
