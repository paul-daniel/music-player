import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Albums, AlbumsItem, SearchType } from 'src/app/model/SearchResult';
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


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @ViewChild('searchbar') searchbar : ElementRef|undefined;
  searchInput : string = '';
  searchInputControl = new FormControl('');
  albums : Album[] = [];

  constructor(private searchService : SearchService){

  }

  search(){
    const searchQuery = this.searchInputControl.value;
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
  
  moveUpEffect() : void{
    this.searchbar?.nativeElement.classList.add('moveUp')
  }

  resetEffect() : void{
    if(this.searchInputControl.value?.length === 0){
      this.searchbar?.nativeElement.classList.remove('moveUp')
    }
  }
}
