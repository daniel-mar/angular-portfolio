import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HeaderComponent } from './header.layout';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        provideRouter([]) // Instantiates an empty, clean mock router engine for the test sandbox
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Securely initializes the template hierarchy
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the precise brand identity logo text', () => {
    const element = fixture.nativeElement as HTMLElement;
    const brandElement = element.querySelector('.brand-logo');
    expect(brandElement?.textContent?.trim()).toBe('Associate SE Portfolio');
  });
});