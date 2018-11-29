import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'views', loadChildren: 'src/app/views/views.module#ViewsModule' },
  { path: '', redirectTo: 'views', pathMatch: 'full' },
  { path: '**', redirectTo: 'views' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
