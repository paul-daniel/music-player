import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-album-image',
  templateUrl: './album-image.component.html',
  styleUrls: ['./album-image.component.scss']
})
export class AlbumImageComponent {

  @Input() albumImgUrl : string = "assets/images/banner-image.jpeg";
  @Input() albumImgAlt : string = "Album Image";
  @Input() title : string = "Instinct";
  @Input() releaseDate : string =  "Released May, 2022";
}
