import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContuctUsComponent } from './contuct-us/contuct-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'productdetails/:id',component:ProductDetailsComponent},
  {path:'about',component:AboutComponent},
  {path:'contactus',component:ContuctUsComponent },
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
