import { ListingsService } from './../listings.service';
import { Listing } from './../types';
// import { fakeMyListings } from './../fake-data';
import { ListingDataFormComponent } from './../listing-data-form/listing-data-form.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css'],
})
export class EditListingPageComponent implements OnInit {
  listing: Listing

  name: string = '';
  description: string = '';
  price: string = '';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private listingsService: ListingsService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listingsService.getListingById(id).subscribe(listing => this.listing = listing);
  }

  onSubmit({name, description, price}): void {
    this.listingsService.editListing(this.listing.id, name, description, price).subscribe(() => {
      this.router.navigateByUrl('/my-listings');


    });
  }
}
