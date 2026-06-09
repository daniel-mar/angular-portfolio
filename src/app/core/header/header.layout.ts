import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavComponent } from './nav/nav.layout';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavComponent], // Imports the neighboring clean nav block
  templateUrl: './header.layout.html',
  styleUrls: ['./header.layout.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}