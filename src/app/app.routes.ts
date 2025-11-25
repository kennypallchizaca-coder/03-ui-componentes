import { Routes } from '@angular/router';
import { DaisyuiPageComponent } from './features/pages/DaisyuiPage/daisyui-page';
import { SignalBoxComponent } from './features/components/SignalBoxComponent/signal-box';
import { ComponentesPageComponent } from './features/pages/ComponentesPage/componentes-page';
import { SimpsonsPageComponent } from './features/pages/SimpsonsPage/simpsons-page';
import { SimpsonDetailPageComponent } from './features/pages/SimpsonDetailPage/simpson-detail-page';

export const routes: Routes = [
  {
    path: '',
    component: DaisyuiPageComponent,
  },
  {
    path: 'componentes',
    component: ComponentesPageComponent,
  },

  {
    path: 'componentes/:id',
    component: SignalBoxComponent,
  },
  {
    path: 'simpsons',
    component: SimpsonsPageComponent,
  },
  {
    path: 'simpsons/:id',
    component: SimpsonDetailPageComponent,
  },
];
