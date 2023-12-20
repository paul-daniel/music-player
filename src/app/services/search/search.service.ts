import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { SearchResults, SearchType } from 'src/app/model/SearchResult';

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

  search(type: SearchType = SearchType.Multi, query : string) : Observable<SearchResults>{

    const params = new HttpParams()
      .set('q', query)
      .set('type', type)
      .set('offset', '0')
      .set('limit', '5')
      .set('numberOfTopResults', '5');

    return this.http.get<SearchResults>(this.apiUrl, {headers : this.headers, params : params})
            .pipe(
              catchError((error) => {
                console.error('Error occured',error);
                return throwError(()=>error);
              })
            )
  }

  getBrowseAllData() : Observable<any>{
    const token = 'Bearer BQBPOMfS_Fdr2NOEW7FmOp-QBB9WZkDDJTRsNZUOlB-7o_duWYo_ISNWhqHGv67UVZMqBNO9OFp9GYVv0ibaPwd3_S8SD8QoHh5vnqDFMCw14_n3Pfg'
    const headers = new HttpHeaders({
      'Authorization': token
    })

    return this.http.get( 
      'https://api-partner.spotify.com/pathfinder/v1/query?operationName=browseAll&variables=%7B%22pagePagination%22%3A%7B%22offset%22%3A0%2C%22limit%22%3A10%7D%2C%22sectionPagination%22%3A%7B%22offset%22%3A0%2C%22limit%22%3A99%7D%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22d7dafb80e90c0861545e78ce3e144e3f706bafb09ea31ed8eb12f05f9b3ff4fa%22%7D%7D',
      {headers : headers}
    )
    .pipe(
      map((response: any) => { return response?.data?.browseStart?.sections?.items[0].sectionItems.items; }),
      catchError((err) => { return err; })
    )
  }
}
