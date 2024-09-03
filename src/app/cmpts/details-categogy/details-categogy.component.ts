import { ActivatedRoute } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../../core/services/categories.service';
import { ICategory } from '../../core/interfaces/iproduct';

@Component({
  selector: 'app-details-categogy',
  standalone: true,
  imports: [],
  templateUrl: './details-categogy.component.html',
  styleUrl: './details-categogy.component.scss',
})
export class DetailsCategogyComponent implements OnInit {
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _CategoriesService = inject(CategoriesService);
  detailsCat: ICategory = {} as ICategory;
  ngOnInit(): void {
    this._ActivatedRoute.data.subscribe({
      next:(res)=> {
        this.detailsCat = res['catDetailsResolve']['data']
      }, error:(err)=> {
        console.log(err);
      }
    })
  }
}
