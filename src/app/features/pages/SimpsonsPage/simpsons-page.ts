import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
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
  private instService = inject(SimpsonsService);
  paginationService = inject(PaginationService);

  simpsonsResource = toSignal(
    this.simpsonsService.getCharacters(this.paginationService.currentPage()).pipe(map((res) => res)),
    { initialValue: null }
  );

  /// VERISION REACTIVA
  instResource = rxResource({
    params: () => ({
      page: this.paginationService.currentPage() - 1,
      limit: this.bannersPerPage(),
    }),
    stream: ({ params }) =>
      this.instService.getInstitucionesUsers({
        offset: params.page * params.limit,
        limit: params.limit,
      }),
  });


}
