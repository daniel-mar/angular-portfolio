import { Component, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';
import { ProjectCardComponent, Project } from '../../shared/project-card/project-card';

// Target our unified profile/project central layout asset
import portfolioData from '../../../assets/data/portfolio-data.json';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit {
  readonly projects = signal<Project[]>([]);

  ngOnInit(): void {
    // Correctly point to the sub-array configuration mapping
    this.projects.set(portfolioData.projects as Project[]);
  }
}