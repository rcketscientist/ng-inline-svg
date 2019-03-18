import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DemoComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InlineSVGModule.forRoot()
  ],
  providers: [],
  bootstrap: [DemoComponent]
})
export class AppModule { }
