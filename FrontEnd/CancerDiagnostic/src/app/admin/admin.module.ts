import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { ContainerComponent } from './layout/container/container.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidbarComponent } from './layout/sidbar/sidbar.component';
import { RouterModule, Routes } from '@angular/router';
//import { AjoutermedecinComponent } from './layout/container/ajoutermedecin/ajoutermedecin.component';
import { ProfiladminComponent } from './layout/container/profiladmin/profiladmin.component';
import { AppRoutingModule } from './admin.route';
import { DoctorComponent } from './layout/container/doctor/doctor.component';
import { NotificationComponent } from './layout/container/notification/notification.component';
import { AjouterAdminComponent } from './layout/container/administrator/ajouter-admin/ajouter-admin.component';
import { SharedService } from 'src/app/services/shared.service';

// const adminRoute : Routes = [
//  {
//    path:'',component:LayoutComponent,
//    children:[
//      {path:'',component:ProfiladminComponent},
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
    //AjoutermedecinComponent,
    ProfiladminComponent,
    DoctorComponent,
    NotificationComponent,
    AjouterAdminComponent,
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    //RouterModule.forChild(adminRoute)
    AppRoutingModule
  ],
  providers: [SharedService],
})
export class AdminModule { }
