import { ListingsService } from './../listings.service';
import { Listing } from './../types';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css']
})
export class ListingPageComponent implements OnInit {

  listings: Listing [] = []



  constructor(private listingsService: ListingsService) { }

  ngOnInit(): void {
    this.listingsService.getListing().subscribe(listings => this.listings = listings);
  }

}
