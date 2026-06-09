import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.html',
  styleUrls: ['./project-card.scss'], // Points cleanly to your stylesheet boundary
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
}