import {
  Component,
  DestroyRef,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { BrandsServiseService } from '../../core/services/brands.service';
import { IBrands } from '../../core/interfaces/ibrands';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss',
})
export class BrandsComponent implements OnInit, OnDestroy {
  private readonly _BrandsServiseService = inject(BrandsServiseService);
  brandsList: IBrands[] = [];
  brandsSub!: Subscription;
  ngOnInit(): void {
    this.brandsSub = this._BrandsServiseService.getBrands().subscribe({
      next: (res) => {
        this.brandsList = res.data;
      }
    });
  }
  ngOnDestroy(): void {
    this.brandsSub.unsubscribe();
  }
}
