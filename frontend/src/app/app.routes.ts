// app.routes.ts
import { Routes } from '@angular/router';
import { ProdutoComponent } from './features/produto/produto.component';

export const routes: Routes = [
  { path: 'produtos', component: ProdutoComponent },
  { path: '', redirectTo: '/produtos', pathMatch: 'full' }
];
