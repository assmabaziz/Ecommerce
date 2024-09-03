import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BrandsServiseService } from '../../core/services/brands.service';
import { IBrands } from '../../core/interfaces/ibrands';

@Component({
  selector: 'app-details-brand',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details-brand.component.html',
  styleUrl: './details-brand.component.scss',
})
export class DetailsBrandComponent implements OnInit {
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _BrandsServiseService = inject(BrandsServiseService);
  brandDetails: IBrands = {} as IBrands;
  ngOnInit(): void {
    this._ActivatedRoute.data.subscribe({
      next:(res)=> {
        this.brandDetails = res['brandDetailsResolve']['data']
      }
    })
  }

}
