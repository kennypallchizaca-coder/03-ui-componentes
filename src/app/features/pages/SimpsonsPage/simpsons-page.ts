import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs';
import { SimpsonsService } from '../../../services/simpsons.service';
import { PaginationService } from '../../../services/pagination.service';

@Component({
  selector: 'app-simpsons-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './simpsons-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpsonsPageComponent {
  private simpsonsService = inject(SimpsonsService);
  paginationService = inject(PaginationService);

  simpsonsResource = toSignal(
    toObservable(this.paginationService.currentPage).pipe(
      map((page) => (Number.isNaN(page) || page < 1 ? 1 : page)),
      switchMap((page) => this.simpsonsService.getCharacters(page))
    ),
    { initialValue: null }
  );

  protected characterImage(path: string): string {
    if (!path) {
      return 'https://placehold.co/150x150?text=Simpson';
    }
    return path.startsWith('http') ? path : `https://cdn.thesimpsonsapi.com${path}`;
  }

  protected previousPage(): number {
    return Math.max(1, this.paginationService.currentPage() - 1);
  }

  protected nextPage(): number {
    const totalPages = this.simpsonsResource()?.pages;
    const next = this.paginationService.currentPage() + 1;
    return totalPages ? Math.min(totalPages, next) : next;
  }

  protected canGoPrev(): boolean {
    return this.paginationService.currentPage() > 1;
  }

  protected canGoNext(): boolean {
    const totalPages = this.simpsonsResource()?.pages;
    return totalPages ? this.paginationService.currentPage() < totalPages : true;
  }
}
