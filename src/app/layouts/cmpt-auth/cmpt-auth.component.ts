import { Component } from '@angular/core';
import { NavAuthComponent } from '../../cmpts/nav-auth/nav-auth.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../cmpts/footer/footer.component';

@Component({
  selector: 'app-cmpt-auth',
  standalone: true,
  imports: [NavAuthComponent,RouterOutlet,FooterComponent],
  templateUrl: './cmpt-auth.component.html',
  styleUrl: './cmpt-auth.component.scss'
})
export class CmptAuthComponent {

}
