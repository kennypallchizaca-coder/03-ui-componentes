import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarDrawerComponent } from './shared/components/navbar-drawer/navbar-drawer.component';
import { DaisyFooterComponent } from './features/components/DaisyFooter/daisy-footer';
import { BackToTopComponent } from './shared/components/back-to-top/back-to-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarDrawerComponent, DaisyFooterComponent, BackToTopComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  host: {
    class: 'min-h-screen bg-base-200 text-base-content',
  },
})
export class App {}
