import { ListingsService } from './../listings.service';
// import { fakeMyListings } from './../fake-data';
import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';

@Component({
  selector: 'app-my-listing-page',
  templateUrl: './my-listing-page.component.html',
  styleUrls: ['./my-listing-page.component.css'],
})
export class MyListingPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor(private listingSerivce: ListingsService,
    ) {}

  ngOnInit(): void {
    this.listingSerivce.getListingForUser().subscribe(istings => this.listings = this.listings);
  }
  onDeletedClicked(listingId: string): void {
    this.listingSerivce.deleteListing(listingId).subscribe(() => {
      this.listings = this.listings.filter(
        listing => listing.id !== listingId
      );
    })

  }
}
