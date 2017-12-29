import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LightboxModule } from 'angular2-lightbox';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 