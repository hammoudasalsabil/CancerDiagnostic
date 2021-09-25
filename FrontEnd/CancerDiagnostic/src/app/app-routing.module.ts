import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilModule } from './accueill/accueil.module';
import { AdminModule } from './admin/admin.module';
import { MedecinModule } from './medecin/medecin.module';

const routes: Routes = [
  {path:'', loadChildren: () => import('./accueill/accueil.module').then(m => m.AccueilModule)},
  { path: 'Admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'Doctor', loadChildren: () => import('./medecin/medecin.module').then(m => m.MedecinModule) }
];
@NgModule({
  imports: [
    AccueilModule,
    AdminModule,
    MedecinModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
