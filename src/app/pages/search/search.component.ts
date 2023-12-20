import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Albums, AlbumsItem, SearchType } from 'src/app/model/SearchResult';
import { BrowseCategory } from 'src/app/model/browseAll';
import { SearchService } from 'src/app/services/search/search.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  categories :  BrowseCategory[] = [];

  searchInputControl = new FormControl('');

  constructor(private searchService : SearchService){
  }

  ngOnInit(): void {
      this.searchService.getBrowseAllData().subscribe(categories => {
        this.categories = (categories as any[])
                          .map(category => category?.content.data.data)
                          .filter(category => category !== undefined)
                          .map(category => category.cardRepresentation) as BrowseCategory[];
      })
  }

  // search(){
  //   const searchQuery = this.searchInputControl.value;
  //   if(searchQuery && searchQuery.length >= 3){
  //     this.searchService.search(SearchType.Albums ,searchQuery).subscribe({
  //       next: data => {
  //         this.albums = data.albums.items.map(item => item.data);
  //         console.log(data);
  //       },
  //       error: err => {
  //         console.error(err);
  //       }
  //     })
  //   }
  // }
}
