import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaisyNavbarComponent } from '../../components/DaisyNavbar/daisy-navbar';
import { DaisyFooterComponent } from '../../components/DaisyFooter/daisy-footer';
import { DaisyMockCodeComponent } from '../../components/DaisyMockCode/daisy-mock-code';
import { DaisyDataTableComponent } from '../../components/DaisyDataTable/daisy-data-table';
import { DaisyProductCardComponent } from '../../components/DaisyProductCard/daisy-product-card';
import { DaisyResponsiveCardsComponent } from '../../components/DaisyResponsiveCards/daisy-responsive-cards';
import { DaisyHover3dComponent } from '../../components/DaisyHover3d/daisy-hover-3d';
import { DaisyHover3dCardComponent } from '../../components/DaisyHover3dCard/daisy-hover-3d-card';

@Component({
  selector: 'app-daisyui-page',
  standalone: true,
  imports: [
    CommonModule,
    DaisyNavbarComponent,
    DaisyFooterComponent,
    DaisyMockCodeComponent,
    DaisyDataTableComponent,
    DaisyProductCardComponent,
    DaisyResponsiveCardsComponent,
    DaisyHover3dComponent,
    DaisyHover3dCardComponent,
  ],
  templateUrl: './daisyui-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaisyuiPageComponent {}
