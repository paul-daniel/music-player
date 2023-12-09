import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumBannerComponent } from './components/album-banner/album-banner.component';
import { AlbumImageComponent } from './components/album-image/album-image.component';
import { PlatformsTrayComponent } from './components/platforms-tray/platforms-tray.component';
import { SpacerComponent } from './components/spacer/spacer.component';

const components = [
  AlbumBannerComponent,
  AlbumImageComponent,
  PlatformsTrayComponent,
  SpacerComponent,
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
