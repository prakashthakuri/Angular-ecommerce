import { ListingsService } from './../listings.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.css'],
})
export class NewListingPageComponent implements OnInit {
  // name: string= ""
  // description: string= ""
  // price: string = ""
  //no longer needed

  constructor(
    private router: Router,
    private listingsService: ListingsService,
  ) {}

  ngOnInit(): void {}

  onSubmit(name, description, price): void {
    this.listingsService.createListing(name, description, price).subscribe(()=> {
      this.router.navigateByUrl('/my-listings')
    });



  }
}


