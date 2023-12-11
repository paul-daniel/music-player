import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent {

  @Input() index : number = 1;
  @Input() title : string = "The Small Things";
  @Input() author : string = "Conro";
  @Input() time :  string = "3:35";
}
