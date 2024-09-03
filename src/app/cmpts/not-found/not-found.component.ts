import { Component } from '@angular/core';
import { NavBlankComponent } from "../nav-blank/nav-blank.component";
import { FooterComponent } from "../footer/footer.component";
import { NavAuthComponent } from "../nav-auth/nav-auth.component";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [NavBlankComponent, FooterComponent, NavAuthComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
