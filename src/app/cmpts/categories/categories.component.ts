import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CategoriesService } from '../../core/services/categories.service';
import { Subscription } from 'rxjs';
import { ICategory } from '../../core/interfaces/iproduct';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit, OnDestroy {
  private readonly _CategoriesService = inject(CategoriesService);
  categoriesSub!: Subscription;
  catList: ICategory[] = [];
  ngOnInit(): void {
    this.categoriesSub = this._CategoriesService.getCategories().subscribe({
      next: (res) => {
        this.catList = res.data;
      }
    });
  }
  ngOnDestroy(): void {
    this.categoriesSub.unsubscribe();
  }
}
