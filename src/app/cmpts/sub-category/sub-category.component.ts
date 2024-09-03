import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CategoriesService } from '../../core/services/categories.service';
import { Subscription } from 'rxjs';
import { ISubcategory } from '../../core/interfaces/subcategory';

@Component({
  selector: 'app-sub-category',
  standalone: true,
  imports: [],
  templateUrl: './sub-category.component.html',
  styleUrl: './sub-category.component.scss',
})
export class SubCategoryComponent implements OnInit, OnDestroy {
  private readonly _CategoriesService = inject(CategoriesService);
  subCategorySub!: Subscription;
  subCtegoryList: ISubcategory[] = [];
  ngOnInit(): void {
    this.subCategorySub = this._CategoriesService.getSubCategories().subscribe({
      next: (res) => {
        this.subCtegoryList = res.data
        console.log(this.subCtegoryList);
      }
    });
  }
  ngOnDestroy(): void {
    this.subCategorySub.unsubscribe();
  }
}
