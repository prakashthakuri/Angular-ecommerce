import { HttpClientModule } from '@angu';
// import { fakeListings } from './fake-data';
import { Listing } from './types';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(private http: HttpClient) { }

  getListing(): Observable<Listing[]> {
    // tslint:disable-next-line: semicolon
    return this.http.get<Listing[]>('/api/listings')
  }
}
