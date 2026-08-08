import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DarkModeToggle } from '../../../shared/dark-mode-toggle/dark-mode-toggle';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, DarkModeToggle], // Only need RouterModule for navigation bindings, DarkModeToggle for button
  templateUrl: './nav.layout.html',
  styleUrls: ['./nav.layout.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {
  readonly links = [
    { label: 'About Me', path: '/about' },
    { label: 'Projects', path: '/projects' }
  ];
}