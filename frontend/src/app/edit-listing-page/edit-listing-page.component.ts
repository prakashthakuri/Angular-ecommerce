import { Listing } from './../types';
import { fakeMyListings } from './../fake-data';
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
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.listing = fakeMyListings.find(listing => listing.id ===id )
  }

  onSubmit(): void {
    alert('Sving Changes to the Listing...');
    this.router.navigateByUrl('/my-listings');
  }
}
