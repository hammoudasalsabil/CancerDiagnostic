import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';import { LayoutComponent } from './layout/layout.component';
import { ProfiladminComponent } from './layout/container/profiladmin/profiladmin.component';
import { DoctorComponent } from './layout/container/doctor/doctor.component';
import { NotificationComponent } from './layout/container/notification/notification.component';
import { AjouterAdminComponent } from './layout/container/administrator/ajouter-admin/ajouter-admin.component';
import { DoctoraddComponent } from './layout/container/doctoradd/doctoradd.component';
import { DoctoreditComponent } from './layout/container/doctoredit/doctoredit.component';
import { PatientsComponent } from './layout/container/patients/patients.component';
                                  

// const adminRoute : Routes = [
//   {
//     path:'',component:LayoutComponent,
//     children:[
//       {path:'',component:ProfiladminComponent},
//    //   {path:'ajout',component:AjouterUserComponent},
//       {path:'admin',component:AdministratorComponent},
//     ]
//   } 
//  ]

const adminRoute : Routes = [
  {
    path:'Admin',component:LayoutComponent,
    children:[
      {path:'',component:ProfiladminComponent},
      {path:'doctor',component:DoctorComponent},
      {path:'notification',component:NotificationComponent},
      {path:'ajouterAdmin',component:AjouterAdminComponent},
      {path:'addDoctor',component:DoctoraddComponent},
      {path:'editDoctor/:id',component:DoctoreditComponent},
      {path:'patientsList',component:PatientsComponent},
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
