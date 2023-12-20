import { Component } from '@angular/core';
import { trigger, style, animate, transition, query } from '@angular/animations';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter, :leave', [
          style({
            position: 'fixed',
            width: '100%',
            top: 0,
            left: 0,
            opacity: 1
          })
        ], { optional: true }),
        query(':leave', [
          style({ opacity: 1 }),
          animate('1s', style({ opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          animate('1s', style({ opacity: 1 }))
        ], { optional: true }),
      ])
    ])
  ]
})
export class AppComponent {
  title = 'music-player';
  showLoadingScreen = false;

  constructor(private router: Router, private loadingService: LoadingService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loadingService.setLoading(true);
        this.showLoadingScreen = true;
      } else if (event instanceof NavigationEnd) {
        this.loadingService.setLoading(false);
      }
    });
  }

  onAnimationDone() {
    this.showLoadingScreen = false;
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
