import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule], // Only need RouterModule for navigation bindings
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