import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css'],
})
export class ListingDataFormComponent implements OnInit {

  @Input() buttonText //from the data-forms
  @Input() currentName
  @Input() currentDescription
  @Input() currentPrice
  
  name: string= ""
  description: string= ""
  price: string = ""

  @Output() onSubmit = new EventEmitter<Listing>()

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {

    //passing all value on current one 
    this.name = this.currentName
    this.description = this.currentDescription
    this.price = this.currentPrice
  }

  onButtonClick(): void {
    
    //this allows parent component to use parenthesis syntax in html tag, whenever it calls

    this.onSubmit.emit({
      id:null,
      name: this.name,
      description : this.description,
      price: Number(this.price)
    })
    
  }
}
