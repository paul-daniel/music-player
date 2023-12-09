import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformsTrayComponent } from './platforms-tray.component';

describe('PlatformsTrayComponent', () => {
  let component: PlatformsTrayComponent;
  let fixture: ComponentFixture<PlatformsTrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatformsTrayComponent]
    });
    fixture = TestBed.createComponent(PlatformsTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
