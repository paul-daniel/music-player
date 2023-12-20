import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { SearchResults } from 'src/app/model/SearchResult';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  apiUrl : string = 'https://spotify23.p.rapidapi.com/search/'
  headers = new HttpHeaders({
    'X-RapidAPI-Key': '276277a595mshca69607e25449dcp1978cajsn6364df4ac7f2',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  })

  constructor(private http : HttpClient) {}

  search(query : string) : Observable<SearchResults>{

    const params = new HttpParams()
      .set('q', query)
      .set('type', 'multi')
      .set('offset', '0')
      .set('limit', '20')
      .set('numberOfTopResults', '5');

    return this.http.get<SearchResults>(this.apiUrl, {headers : this.headers, params : params})
            .pipe(
              catchError((error) => {
                console.error('Error occured',error);
                return throwError(()=>error);
              })
            )
  }

}
