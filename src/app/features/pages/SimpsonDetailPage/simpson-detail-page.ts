import { ChangeDetectionStrategy, Component, Signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap, of } from 'rxjs';
import { SimpsonsService } from '../../../services/simpsons.service';
import { SimpsonsCharacterDetail } from '../../../models/simpsons.models';

@Component({
  selector: 'app-simpson-detail-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './simpson-detail-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpsonDetailPageComponent {
  private route = inject(ActivatedRoute);
  private service = inject(SimpsonsService);

  personaje: Signal<SimpsonsCharacterDetail | null | undefined> = toSignal<
    SimpsonsCharacterDetail | null | undefined
  >(
    this.route.paramMap.pipe(
      map((params) => Number(params.get('id'))),
      switchMap((id) => (Number.isNaN(id) ? of(null) : this.service.getCharacterById(id)))
    ),
    { initialValue: undefined }
  );

  private readonly IMAGE_CDN_SIZE = '500';

  protected characterImage(path: string): string {
    if (!path) {
      return 'https://placehold.co/200x260?text=Simpson';
    }
    return path.startsWith('http')
      ? path
      : `https://cdn.thesimpsonsapi.com/${this.IMAGE_CDN_SIZE}${path}`;
  }
}
