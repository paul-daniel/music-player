import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumBannerComponent } from './album-banner.component';

describe('AlbumBannerComponent', () => {
  let component: AlbumBannerComponent;
  let fixture: ComponentFixture<AlbumBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumBannerComponent]
    });
    fixture = TestBed.createComponent(AlbumBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
