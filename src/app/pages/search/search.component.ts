import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Albums, AlbumsItem, SearchType } from 'src/app/model/SearchResult';
import { BrowseCategory } from 'src/app/model/browseAll';
import { SearchService } from 'src/app/services/search/search.service';

export interface Album {
  uri: string;
  name: string;
  artists: {
    items: Array<{
      uri: string;
      profile: {
        name: string;
      };
    }>;
  };
  coverArt: {
    sources: Array<{
      url: string;
      width: number;
      height: number;
    }>;
  };
  date: {
    year: number;
  };
}

interface SortedData {
  all: any[]; // This can hold a mix of all types
  songs: any[];
  playlists: any[];
  albums: any[];
  podcasts: any[];
  artists: any[];
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  categories :  BrowseCategory[] = [];
  searchInputControl = new FormControl('');
  albums : Album[] = [];
  sortedData: SortedData = {
    all: [],
    songs: [],
    playlists: [],
    albums: [],
    podcasts: [],
    artists: []
  };

  constructor(private searchService : SearchService, private router: Router){}

  ngOnInit(): void {
      this.searchService.getBrowseAllData().subscribe(categories => {
        this.categories = (categories as any[])
                          .map(category => category?.content.data.data)
                          .filter(category => category !== undefined)
                          .map(category => category.cardRepresentation) as BrowseCategory[];
      })
  }

  search(event : Event) : void{
    event.preventDefault();
    const searchQuery = this.searchInputControl.value;
    if(searchQuery && searchQuery.length >= 3){
      this.searchService.search(SearchType.Multi,searchQuery).subscribe({
        next: data => {
          // this.albums = data.albums.items.map(item => item.data);

          this.searchService.search(SearchType.Multi, searchQuery).subscribe({
            next: data => {

              this.sortedData.albums = data.albums.items.map(item => item.data);

              // Flatten and sort songs
              this.sortedData.songs = data.tracks.items.map(item => item.data);
          
              // Flatten and sort playlists
              this.sortedData.playlists = data.playlists.items.map(item => item.data);
          
              // Flatten and sort podcasts
              this.sortedData.podcasts = data.podcasts.items.map(item => item.data);
          
              // Flatten and sort artists
              this.sortedData.artists = data.artists.items.map(item => item.data);
          
              // Combine all for 'all' category
              this.sortedData.all = [
                ...this.sortedData.albums, 
                ...this.sortedData.songs, 
                ...this.sortedData.playlists, 
                ...this.sortedData.podcasts,
                ...this.sortedData.artists
              ];
          
              console.log(this.sortedData);
            },
            error: err => {
              console.error(err);
            }
          });
          
          console.log(data);
        },
        error: err => {
          console.error(err);
        }
      })
    }
  }

  onSearchEnter(query ?: string) : void{
    const searchQuery = query ? query : this.searchInputControl.value;
    if(searchQuery && searchQuery.length >= 3){
      this.searchService.search(SearchType.Albums ,searchQuery).subscribe({
        next: data => {
          this.albums = data.albums.items.map(item => item.data);
          console.log(data);
        },
        error: err => {
          console.error(err);
        }
      })
    }
  }

  onCardClick(album : any) : void{
    const albumId = album.uri.split(':')[2];
    this.router.navigate(['/'], {
      queryParams : {
        album: album.name
      },
      state: {
        id : albumId,
        album : album
      }
    })
  }
}
