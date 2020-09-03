import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { MyListingPageComponent } from './my-listing-page/my-listing-page.component';

const routes: Routes = [
   
  {path:'', redirectTo:'/listing', pathMatch:'full'},

  {  path:'listings', component: ListingPageComponent, pathMatch: 'full'},
  {  path:'listing/:id', component: ListingDetailPageComponent},
  {  path:'contact/:id', component:ContactPageComponent},
  {  path:'edit-listing/:id', component: EditListingPageComponent},
  {  path: 'my-listing', component: MyListingPageComponent},
  {  path: 'new-listing', component: NewListingPageComponent}
]; // Add every Routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
