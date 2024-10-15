import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SectionOneComponent } from "./section-one/section-one.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SectionTwoComponent } from "./section-two/section-two.component";
import { SectionThreeComponent } from "./section-three/section-three.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SectionOneComponent, NavbarComponent, SectionTwoComponent, SectionThreeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Landwey';
}
