import { Routes } from '@angular/router';
import { EnderecoSemInfoComponent } from './endereco-sem-info/endereco-sem-info.component';
import { EnderecoInfoComponent } from './endereco-info/endereco-info.component';

export const appRoutes: Routes = [
  { path: 'endereco-sem-info', component: EnderecoSemInfoComponent },
  { path: 'endereco-info', component: EnderecoInfoComponent },
  { path: '', redirectTo: 'endereco-sem-info', pathMatch: 'full' },
];
