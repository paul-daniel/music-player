import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumImageComponent } from './album-image.component';

describe('AlbumImageComponent', () => {
  let component: AlbumImageComponent;
  let fixture: ComponentFixture<AlbumImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumImageComponent]
    });
    fixture = TestBed.createComponent(AlbumImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
