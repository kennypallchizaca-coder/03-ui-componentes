import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs';
import { SimpsonsService } from '../../../services/simpsons.service';
import { PaginationService } from '../../../services/pagination.service';
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component';
import { BreadcrumbsComponent } from '../../../shared/components/breadcrumbs/breadcrumbs.component';
import { HeroSimpsonsComponent } from './components/hero-simpsons/hero-simpsons.component';

@Component({
  selector: 'app-simpsons-page',
  standalone: true,
  imports: [CommonModule, RouterModule, PaginationComponent, BreadcrumbsComponent, HeroSimpsonsComponent],
  templateUrl: './simpsons-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpsonsPageComponent {
  private simpsonsService = inject(SimpsonsService);
  paginationService = inject(PaginationService);

  totalPages = signal(0);

  simpsonsResource = toSignal(
    toObservable(this.paginationService.currentPage).pipe(
      map((page) => (Number.isNaN(page) || page < 1 ? 1 : page)),
      switchMap((page) => this.simpsonsService.getCharacters(page))
    ),
    { initialValue: null }
  );

  constructor() {
    effect(() => {
      if (this.simpsonsResource()?.pages) {
        this.totalPages.set(this.simpsonsResource()!.pages);
      }
    });
  }

  protected characterImage(path: string): string {
    if (!path) {
      return 'https://placehold.co/150x150?text=Simpson';
    }
    return path.startsWith('http') ? path : `https://cdn.thesimpsonsapi.com${path}`;
  }
}
