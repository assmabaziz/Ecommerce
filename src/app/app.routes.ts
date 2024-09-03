import { Routes } from '@angular/router';
import { CmptAuthComponent } from './layouts/cmpt-auth/cmpt-auth.component';
import { CmptBlankComponent } from './layouts/cmpt-blank/cmpt-blank.component';
import { HomeComponent } from './cmpts/home/home.component';
import { CategoriesComponent } from './cmpts/categories/categories.component';
import { authGuard } from './core/guards/auth.guard';
import { logedGuard } from './core/guards/loged.guard';
import { detailsDataResolver } from './core/guards/details-data.resolver';
import { productsResolver } from './core/guards/products.resolver';
import { categoriesResolver } from './core/guards/categories.resolver';
import { brandsResolver } from './core/guards/brands.resolver';
import { detailsCatResolver } from './core/guards/details-cat.resolver';
import { detailsBrandResolver } from './core/guards/details-brand.resolver';
import { wishListResolver } from './core/guards/wish-list.resolver';
import { cartResolver } from './core/guards/cart.resolver';
import { allOrdersResolver } from './core/gurds/all-orders.resolver';
export const routes: Routes = [
  {
    path: '',
    component: CmptAuthComponent,
    canActivate: [logedGuard],
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        loadComponent: () =>
          import('./cmpts/log-in/log-in.component').then(
            (c) => c.LogInComponent
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./cmpts/register//register.component').then(
            (c) => c.RegisterComponent
          ),
      },
      {
        path: 'forget',
        loadComponent: () =>
          import('./cmpts/forgot-password/forgot-password.component').then(
            (c) => c.ForgotPasswordComponent
          ),
      },
    ],
  },
  {
    path: '',
    component: CmptBlankComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, title: 'Home' },
      {
        path: 'brands',
        loadComponent: () =>
          import('./cmpts/brands/brands.component').then(
            (c) => c.BrandsComponent
          ),
        resolve: { brandsResolve: brandsResolver },
        title: 'Brands',
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./cmpts/cart/cart.component').then((c) => c.CartComponent),
        resolve: { cartResolve: cartResolver },
        title: 'Cart',
      },
      {
        path: 'categories',
        component: CategoriesComponent,
        resolve: { categoryResolve: categoriesResolver },
        title: 'Categories',
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./cmpts/products/products.component').then(
            (c) => c.ProductsComponent
          ),
        resolve: { products: productsResolver },
        title: 'Products',
      },
      {
        path: 'details/:id',
        loadComponent: () =>
          import('./cmpts/details-product/details-product.component').then(
            (c) => c.DetailsProductComponent
          ),
        resolve: { guardDetails: detailsDataResolver },
      },
      {
        path: 'categoryDetails/:catId',
        loadComponent: () =>
          import('./cmpts/details-categogy/details-categogy.component').then(
            (c) => c.DetailsCategogyComponent
          ),
        resolve: { catDetailsResolve: detailsCatResolver },
      },
      {
        path: 'brandDetails/:brandID',
        loadComponent: () =>
          import('./cmpts/details-brand/details-brand.component').then(
            (c) => c.DetailsBrandComponent
          ),
        resolve: { brandDetailsResolve: detailsBrandResolver },
        title: 'Our partners',
      },
      {
        path: 'subCategories',
        loadComponent: () =>
          import('./cmpts/sub-category/sub-category.component').then(
            (c) => c.SubCategoryComponent
          ),
        title: 'Sub categories',
      },
      {
        path: 'allorders',
        loadComponent: () =>
          import('./cmpts/all-orders/all-orders.component').then(
            (c) => c.AllOrdersComponent
          ),
        resolve: { allOrdersResolve: allOrdersResolver },
        title: 'All orders',
      },
      {
        path: 'orders/:id',
        loadComponent: () =>
          import('./cmpts/orders/orders.component').then(
            (c) => c.OrdersComponent
          ),
        title: 'Orders',
      },
      {
        path: 'wishList',
        loadComponent: () =>
          import('./cmpts/wish-list/wish-list.component').then(
            (c) => c.WishListComponent
          ),
        resolve: { wishListResolve: wishListResolver },
        title: 'Wish list',
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./cmpts/not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
    title: 'Error',
  },
];
