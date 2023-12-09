import { Component } from '@angular/core';

@Component({
  selector: 'app-album-banner',
  templateUrl: './album-banner.component.html',
  styleUrls: ['./album-banner.component.scss']
})
export class AlbumBannerComponent {
  albumTitle : string  = "LEVEL DAYS";
  artistName : string = "CONRO";
}
