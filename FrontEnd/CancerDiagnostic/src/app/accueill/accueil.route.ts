import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutermedecinComponent } from './layout/container/ajoutermedecin/ajoutermedecin.component';
import { ContactComponent } from './layout/container/contact/contact.component';
import { HomeComponent } from './layout/container/home/home.component';
import { InscriptionComponent } from './layout/container/inscription/inscription.component';
import { LayoutComponent } from './layout/layout.component';

// const appRoute:Routes= [
//     {path:'',component:HomeComponent},
//     // {path:'ajout',component:AjoutComponent},
//     // {path:'detail',component:DetailComponent},
//     // {path:'listcoursier',component:ListcoursierComponent},
//     // {path:'profilcoursier',component:ProfilcoursierComponent},
//     // {path:'listdemande',component:ListdemandeComponent},
//     // {path:'poc',component:PocComponent},
//     {path:'**',component:HomeComponent}
  
//   ]
  const adminRoute : Routes = [
    {
      path:'',component:LayoutComponent,
      children:[
        {path:'',component:HomeComponent},
        {path:'ajoutm',component:AjoutermedecinComponent},
        {path:'profil',component:AjoutermedecinComponent},
        {path:'inscription',component:InscriptionComponent},
        {path:'Contact',component:ContactComponent},
      ]
    } 
   ]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoute),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
