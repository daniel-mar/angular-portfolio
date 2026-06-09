import { Component, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';

// Pull our global profile configuration directly from the data layer
import portfolioData from '../../../assets/data/portfolio-data.json';

export interface ProfileData {
  title: string;
  avatarUrl: string;
  headline: string;
  biography: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [], 
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {
  // Read-only profile state tracker
  readonly profile = signal<ProfileData | null>(null);

  ngOnInit(): void {
    this.profile.set(portfolioData.profile);
  }
}