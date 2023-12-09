import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumBannerComponent } from './components/album-banner/album-banner.component';
import { AlbumImageComponent } from './components/album-image/album-image.component';

const components = [
  AlbumBannerComponent,
  AlbumImageComponent
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
