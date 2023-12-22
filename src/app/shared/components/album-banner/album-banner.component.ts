import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private router: Router, private activatedRoute: ActivatedRoute){

    const navigation = this.router.getCurrentNavigation();
    if(navigation?.extras?.state){
      const albumId = navigation?.extras?.state['id'];
      const album = navigation?.extras?.state['album'];

      console.log("DEBUG NAV", album);

      this.albumTitle = album.name;
      this.artistName = album.artists.items[0].profile.name;
      this.albumImgUrl = album.coverArt.sources[2].url;
      this.albumImgAlt = `${album.name} album image`;
      this.title = '';
      this.releaseDate = album.date.year;


      //Accessing query parameters
      this.activatedRoute.queryParams.subscribe(params => {
        const albumName = params['album']
      })
    }
  }
}
