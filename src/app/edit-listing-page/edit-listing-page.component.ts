import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css'],
})
export class EditListingPageComponent implements OnInit {
  name: string = '';
  description: string = '';
  price: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    alert('Sving Changes to the Listing...');
    this.router.navigateByUrl('/my-listings');
  }
}
