import { Component, Input } from '@angular/core';

export interface Platform {
  url : string;
  alt : string;
  title : string;
}

@Component({
  selector: 'app-platforms-tray',
  templateUrl: './platforms-tray.component.html',
  styleUrls: ['./platforms-tray.component.scss']
})
export class PlatformsTrayComponent {
  @Input() platforms : Platform[] = [
    {
      url : "assets/icons/bx-play-circle.svg",
      alt : "player",
      title : "listen to it here"
    },
    {
      url : "assets/icons/bxl-apple.svg",
      alt : "apple music",
      title : "listen on apple music"
    },
    {
      url : "assets/icons/bxl-soundcloud.svg",
      alt : "soundcloud",
      title : "listen on soundcloud"
    },
    {
      url : "assets/icons/bxl-youtube.svg",
      alt : "youtube music",
      title : "listen on youtube music"
    },
    {
      url : "assets/icons/bxl-spotify.svg",
      alt : "spotify",
      title : "listen on spotify"
    },
  ];
}
