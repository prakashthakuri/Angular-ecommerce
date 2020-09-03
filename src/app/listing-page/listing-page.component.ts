import { Listing } from './../types';
import { fakeListings } from './../fake-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css']
})
export class ListingPageComponent implements OnInit {

  listings: Listing [] = []



  constructor() { }

  ngOnInit(): void {
    this.listings = fakeListings
  }

}