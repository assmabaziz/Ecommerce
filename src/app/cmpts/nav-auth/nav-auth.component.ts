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
  private readonly _EcommerceTranslateService = inject(
    EcommerceTranslateService
  );
  constructor(private _FlowbitService: FlowbitService) {}
  ngOnInit(): void {
    this._FlowbitService.loadFlowbite(() => {});
  }
  change(lang: string): void {
    this._EcommerceTranslateService.changeLang(lang);
  }
}
