import { fakeListings } from './fake-data';
import { Listing } from './types';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor() { }

  getListing(): Listing[] {
    // tslint:disable-next-line: semicolon
    return fakeListings
  }
}
