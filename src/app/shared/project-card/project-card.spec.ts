import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectCardComponent, Project } from './project-card';

const mockProject: Project = {
  id: 101,
  title: 'Automated System Test Run',
  description: 'Validating layout architecture integrity checks.',
  imageUrl: 'https://picsum.photos/200',
  technologies: ['Angular 22', 'Jasmine'],
  liveLink: '#',
  githubLink: '#'
};

describe('ProjectCardComponent', () => {
  let component: ProjectCardComponent;
  let fixture: ComponentFixture<ProjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCardComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCardComponent);
    component = fixture.componentInstance;
    
    // CRITICAL: Bind the required mock data BEFORE triggering the first change detection cycle
    component.project = mockProject;
    
    fixture.detectChanges(); // Securely compiles and mounts the guarded HTML layout
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should verify precise text layout matches input state bindings', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('.card-title')?.textContent).toContain('Automated System Test Run');
    expect(element.querySelector('.card-description')?.textContent).toContain('Validating layout architecture integrity checks.');
  });
});