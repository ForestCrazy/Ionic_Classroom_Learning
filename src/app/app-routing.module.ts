import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/ex01',
    pathMatch: 'full',
  },
  {
    path: 'ex01',
    loadChildren: () =>
      import('./ex01/ex01.module').then((m) => m.Ex01PageModule),
  },
  {
    path: 'triangle',
    loadChildren: () =>
      import('./triangle/triangle.module').then((m) => m.TrianglePageModule),
  },
  {
    path: 'rectangle',
    loadChildren: () =>
      import('./rectangle/rectangle.module').then((m) => m.RectanglePageModule),
  },
  {
    path: 'square',
    loadChildren: () =>
      import('./square/square.module').then((m) => m.SquarePageModule),
  },
  {
    path: 'right-triangle',
    loadChildren: () =>
      import('./right-triangle/right-triangle.module').then(
        (m) => m.RightTrianglePageModule
      ),
  },
  {
    path: 'result1',
    loadChildren: () =>
      import('./result1/result1.module').then((m) => m.Result1PageModule),
  },
  {
    path: 'result2',
    loadChildren: () =>
      import('./result2/result2.module').then((m) => m.Result2PageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
