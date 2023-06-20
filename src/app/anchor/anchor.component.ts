import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.scss'],
})
export class AnchorComponent {
  @Input() routerlink: string = '';
  @Input() text: string = '';

}
