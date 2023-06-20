import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '/',
    pathMatch:'full',
    loadChildren: () => import('./body/body.module').then((m) => m.BodyModule),
  },
  { path: '**', redirectTo: 'about' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
