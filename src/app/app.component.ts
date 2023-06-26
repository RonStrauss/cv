import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animation';
import { Observable, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideInAnimation],
})
export class AppComponent {
  constructor(private contexts: ChildrenOutletContexts) { }

  windowWidth$ = fromEvent(window, 'resize')

  isMobileWidth$ = this.windowWidth$.pipe(map(ev => (Number(ev.target) || 0) < 501));

  animationTime$ = this.isMobileWidth$.pipe(map(isMobile => isMobile ? '200ms ease-in' : '400ms ease-in'))



  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
