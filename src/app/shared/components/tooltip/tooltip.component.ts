import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  @Input() text = '';
  visible = false;

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }
}
