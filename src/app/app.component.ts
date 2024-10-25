import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutSectionComponent } from './about-section/about-section.component';

@Component({
  selector: 'h-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,AboutSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'IntroductionToAngular';
}
