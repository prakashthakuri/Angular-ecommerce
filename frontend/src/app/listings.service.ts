// import { fakeListings } from './fake-data';
import { Listing } from './types';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(private http: HttpClient) { }

  getListing(): Observable<Listing[]> {
    // tslint:disable-next-line: semicolon
    return this.http.get<Listing[]>('/api/listings')
  }

  getListingById(id: string): Observable<Listing> {
    return this.http.get<Listing> (`/api/litings/${id}`);

  }

  addViewToListing(id: string): Observable<Listing> {
    return this.http.post<Listing>(`/api/listings/${id}/add-view`, {}, httpOptions );
  }
}
