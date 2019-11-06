import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class NbaApiService {
  // **TODO move url info to more secure place once api is working and back end is set up
  private NBA_API_URL = 'https://api-nba-v1.p.rapidapi.com/players/lastName';
  constructor(private http: HttpClient) { }

  getPlayerByLastName(searchName) {
    // const searchValue = Object.values(searchName);
    const headers = new HttpHeaders()
      .set('x-rapidapi-host', 'api-nba-v1.p.rapidapi.com')
      .set('x-rapidapi-key', 'fGxFj3yBZNmshuPbtIE6pJo1S6wip1a1InRjsn3nF4YwLRtXO5');

    // const options = {headers};

    return this.http.get(`${this.NBA_API_URL}/${searchName.searchTerm}`, {headers}).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `url is ${error.url} `,
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Status;');
  }
}
