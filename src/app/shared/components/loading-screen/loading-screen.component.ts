import { trigger, state, style, transition, animate } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-in')
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({ opacity: 0 })),
      ])
    ])
  ]
})
export class LoadingScreenComponent implements OnDestroy  {
  @Output() animationDone = new EventEmitter<void>();
  @ViewChild('loading') loadingRef : ElementRef | undefined;

  loadingSub : Subscription;

  constructor(private loadingService: LoadingService){
    this.loadingSub = this.loadingService.loading$.subscribe({
      next : (loading) => {
        if(!loading && this.loadingRef){
          this.loadingRef.nativeElement.classList.add('fadeOut');
          setTimeout(() => this.loadingRef?.nativeElement.classList.add('z-index'), 3200)
        }else if(this.loadingRef){
          this.loadingRef.nativeElement.classList.remove('fadeOut');
          
          this.loadingRef?.nativeElement.classList.remove('z-index');
        }
      },
      error : (error) => {
        console.error(error)
      }
    })
  }

  onAnimationDone(event: any) {
    if (event.toState === 'void') {
      this.animationDone.emit();
    }
  }

  ngOnDestroy(): void {
      this.loadingSub.unsubscribe();
  }
}
