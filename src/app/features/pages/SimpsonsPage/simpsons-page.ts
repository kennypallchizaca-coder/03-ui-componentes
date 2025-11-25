import { ChangeDetectionStrategy, Component, Signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { SimpsonsService } from '../../../services/simpsons.service';
import { PaginationService } from '../../../services/pagination.service';
import { SimpsonsResponse } from '../../../models/simpsons.models';

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

  simpsonsResource: Signal<SimpsonsResponse | null> = toSignal(
    toObservable(this.paginationService.currentPage).pipe(
      switchMap((page) => this.simpsonsService.getCharacters(page))
    ),
    { initialValue: null }
  );

  protected characterImage(path: string): string {
    if (!path) {
      return 'https://placehold.co/120x160?text=Simpson';
    }
    return path.startsWith('http') ? path : `https://cdn.thesimpsonsapi.com${path}`;
  }

  protected hasNext(): boolean {
    const resource = this.simpsonsResource();
    if (!resource) return false;
    const current = this.paginationService.currentPage();
    return resource.pages ? current < resource.pages : !!resource.next;
  }

  protected hasPrev(): boolean {
    const current = this.paginationService.currentPage();
    return current > 1;
  }
}
