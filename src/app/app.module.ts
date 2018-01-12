import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { WhyMunchComponent } from './why-munch/why-munch.component';
import { ReviewComponent } from './review/review.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    AboutUsComponent,
    HomeComponent,
    ProductsComponent,
    WhyMunchComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,	  
    AppRoutingModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 