import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NavComponent } from './nav.layout';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavComponent],
      providers: [
        provideRouter([]) // Sandboxes the routerLink bindings so they don't look at live routes
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Securely initializes the template state tree
  });

  it('should verify the component instantiates cleanly', () => {
    expect(component).toBeTruthy();
  });

  it('should map data state links precisely to the navigation markup structure', () => {
    const element = fixture.nativeElement as HTMLElement;
    const navLinks = element.querySelectorAll('.nav-link');
    
    // Verifies that your modern @for block accurately builds your explicit links length
    expect(navLinks.length).toBe(2);
    expect(navLinks[0].textContent?.trim()).toBe('About Me');
    expect(navLinks[1].textContent?.trim()).toBe('Projects');
  });
});