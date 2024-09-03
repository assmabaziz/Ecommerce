import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBlankComponent } from '../../cmpts/nav-blank/nav-blank.component';
import { FooterComponent } from '../../cmpts/footer/footer.component';

@Component({
  selector: 'app-cmpt-blank',
  standalone: true,
  imports: [RouterOutlet, NavBlankComponent, FooterComponent],
  templateUrl: './cmpt-blank.component.html',
  styleUrl: './cmpt-blank.component.scss'
})
export class CmptBlankComponent {

}
