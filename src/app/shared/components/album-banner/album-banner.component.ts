import { Component } from '@angular/core';

@Component({
  selector: 'app-album-banner',
  templateUrl: './album-banner.component.html',
  styleUrls: ['./album-banner.component.scss']
})
export class AlbumBannerComponent {
  albumTitle : string  = "LEVEL DAYS";
  artistName : string = "CONRO";
  albumImgUrl : string = "assets/images/banner-image.jpeg";
  albumImgAlt : string = "Album Image";
  title : string = "Instinct";
  releaseDate : string =  "Released May, 2022";
}
