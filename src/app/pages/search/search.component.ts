import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @ViewChild('searchbar') searchbar : ElementRef|undefined;
  searchInput : string = '';
  searchInputControl = new FormControl('');

  constructor(private searchService : SearchService){

  }

  search(){
    const searchQuery = this.searchInputControl.value;
    if(searchQuery && searchQuery.length >= 3){
      this.searchService.search(searchQuery).subscribe({
        next: data => {
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
