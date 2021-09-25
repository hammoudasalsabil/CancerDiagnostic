import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ContainerComponent } from './layout/container/container.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidbarComponent } from './layout/sidbar/sidbar.component';
import { RouterModule, Routes } from '@angular/router';
import { AjoutermedecinComponent } from './layout/container/ajoutermedecin/ajoutermedecin.component';
import { ProfiladminComponent } from './layout/container/profiladmin/profiladmin.component';
import { InscriptionComponent } from './layout/container/inscription/inscription.component';
import { AppRoutingModule } from './accueil.route';
import { HomeComponent } from './layout/container/home/home.component';
import { ContactComponent } from './layout/container/contact/contact.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

// const adminRoute : Routes = [
//  {
//    path:'accueill',component:LayoutComponent,
//    children:[
//   //   {path:'ajout',component:AjouterUserComponent},
//      {path:'ajoutm',component:AjoutermedecinComponent},
//      {path:'profil',component:AjoutermedecinComponent},
//      {path:'inscription',component:InscriptionComponent},
//    ]
//  } 
// ]
@NgModule({
  declarations: [
    LayoutComponent,
    ContainerComponent,
    NavbarComponent,
    FooterComponent,
    SidbarComponent,
    //AjouterUserComponent,
    AjoutermedecinComponent,
    ProfiladminComponent,
    InscriptionComponent,
    HomeComponent,
    ContactComponent,
    InscriptionComponent,
    
  ],
  imports: [
    CommonModule,
    //RouterModule.forChild(adminRoute),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
  ]
})
export class AccueilModule { }
