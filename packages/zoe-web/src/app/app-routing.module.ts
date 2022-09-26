import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./page/home/home.module').then((m) => m.HomeModule),
    pathMatch: 'full',
  },
  {
    path: 'auth-callback',
    loadChildren: () =>
      import('./page/auth-callback/auth-callback.module').then((m) => m.AuthCallbackModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
