import { fakeListings } from './../fake-data';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from './../types';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  email: string = ''
  message: string = ''
  listing: Listing

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.listing = fakeListings.find(listing =>listing.id === id)
    this.message = `Hi, I am inetresred in your ${this.listing.name}`
  }

  //shows the alert mesages and send us back to the listing page
  
  sendMessage() :void {
    alert(' Your Message has been sent!')
    this.router.navigateByUrl('/listings')
  }

}
