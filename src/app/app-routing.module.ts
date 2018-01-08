import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { WhyMunchComponent } from './why-munch/why-munch.component';
import { ReviewComponent } from './review/review.component';


 
const routes: Routes = [
 
	  { path: '',redirectTo:'home',pathMatch:'full' },
	  {
	  path: 'home',
	  component: HomeComponent
	  },
	  {
	  path: 'about', 
	  component: AboutUsComponent
	  },
	  {
	  path: 'product', 
	  component: ProductsComponent
	  },
	  {
	  path: 'whyMunch', 
	  component: WhyMunchComponent
	  },
	  {
	  path: 'review', 
	  component: ReviewComponent
	  },
    { path: '**', component: HomeComponent } 
   
];

 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
