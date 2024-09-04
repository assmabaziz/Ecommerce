import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FlowbitService } from '../../core/services/flowbit.service';
import { EcommerceTranslateService } from '../../core/services/ecommerce-translate.service';

@Component({
  selector: 'app-nav-auth',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './nav-auth.component.html',
  styleUrl: './nav-auth.component.scss',
})
export class NavAuthComponent implements OnInit {
  isShown: boolean = false;
  listLangShown: boolean = false;
  private readonly _EcommerceTranslateService = inject(
    EcommerceTranslateService
  );
  private readonly _FlowbitService = inject(FlowbitService);
  constructor() {}
  ngOnInit(): void {
    this._FlowbitService.loadFlowbite((flowbite) => {
      console.log(flowbite);
    });
  }
  change(lang: string): void {
    this._EcommerceTranslateService.changeLang(lang);
  }
  showNav(): void {
    if (this.isShown == false) {
      this.isShown = true;
    } else {
      this.isShown = false;
    }
  }
  showLanList(): void {
    if (this.listLangShown) {
      this.listLangShown = false;
      console.log(this.showLanList);

    } else {
      this.listLangShown = true;
      console.log(this.showLanList);
    }
  }
}
