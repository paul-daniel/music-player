import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumBannerComponent } from './components/album-banner/album-banner.component';
import { AlbumImageComponent } from './components/album-image/album-image.component';
import { PlatformsTrayComponent } from './components/platforms-tray/platforms-tray.component';
import { SpacerComponent } from './components/spacer/spacer.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TrackListComponent } from './components/track-list/track-list.component';
import { TrackComponent } from './components/track/track.component';
import { MusicVideoComponent } from './components/music-video/music-video.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

const components = [
  AlbumBannerComponent,
  AlbumImageComponent,
  PlatformsTrayComponent,
  SpacerComponent,
  TooltipComponent,
  TrackListComponent,
  TrackComponent,
  MusicVideoComponent,
  FooterComponent,
  HeaderComponent,
]

@NgModule({
  declarations: [
    ...components,
  ],
  exports : [
    ...components
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
