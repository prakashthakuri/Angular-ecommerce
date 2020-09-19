import { NavBarComponent } from './nav-bar/nav-bar.component';
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
    return this.http.post<Listing>(`/api/listings/${id}/add-view`,
    {},
    httpOptions );
  }

  getListingForUser(): Observable<Listing> {
    return this.http.get<Listing>(`/api/users/12345`);
  }

  deleteListing(id:string): Observable<any> {
    return this.http.delete(`/api/listings/${id}`);
  }
  createListing(name: string, description: string, price: number): Observable<Listing> {
    return this.http.post<Listing>(
      '/api/listings',
      {name, description, price},
      httpOptions
    );
  }
  editListing(id:string, name:string, description: string, price: number): Observable<Listing> {
    return this.http.post<Listing>(
      `api/listings/${id}`,
      {name, description, price},
      httpOptions,
    );
  }

}
