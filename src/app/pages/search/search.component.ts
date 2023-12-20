import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @ViewChild('searchbar') searchbar : ElementRef|undefined;
  searchInput : string = '';
  searchInputControl = new FormControl('');


  
  moveUpEffect() : void{
    this.searchbar?.nativeElement.classList.add('moveUp')
  }

  resetEffect() : void{
    if(this.searchInputControl.value?.length === 0){
      this.searchbar?.nativeElement.classList.remove('moveUp')
    }
  }
}
