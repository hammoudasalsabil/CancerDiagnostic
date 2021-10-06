import { CommonModule  } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiagnosticcerveauoneComponent } from './layout/container/diagnosticcerveauone/diagnosticcerveauone.component';
import { DiagnosticcerveautwoComponent } from './layout/container/diagnosticcerveautwo/diagnosticcerveautwo.component';
import { DiagnosticseinoneComponent } from './layout/container/diagnosticseinone/diagnosticseinone.component';
import { DiagnosticseintwoComponent } from './layout/container/diagnosticseintwo/diagnosticseintwo.component';
import { PatientaddComponent } from './layout/container/patientadd/patientadd.component';
import { PatientsComponent } from './layout/container/patients/patients.component';
import { PatientseditComponent } from './layout/container/patientsedit/patientsedit.component';
import { PatientviewComponent } from './layout/container/patientview/patientview.component';
import { PatientviewpdfComponent } from './layout/container/patientviewpdf/patientviewpdf.component';
import { ProfildoctorComponent } from './layout/container/profildoctor/profildoctor.component';
import { RulesComponent } from './layout/container/rules/rules.component';
import { LayoutComponent } from './layout/layout.component';

const doctorRoute : Routes = [
  {
    path:'Doctor',component:LayoutComponent,
    children:[
      {path:'',component:ProfildoctorComponent},
      {path:'patients',component:PatientsComponent},
      {path:'rules',component:RulesComponent},
      {path:'patientsEdit/:id',component:PatientseditComponent},
      {path:'patientsView/:id',component:PatientviewComponent},
      {path:'patientsAdd',component:PatientaddComponent},
      {path:'diagnosticSienOne/:id',component:DiagnosticseinoneComponent},
      {path:'diagnosticSienTwo/:id',component:DiagnosticseintwoComponent},
      {path:'DiagnosticCerveauOne/:id',component:DiagnosticcerveauoneComponent},
      {path:'DiagnosticCerveauTwo/:id',component:DiagnosticcerveautwoComponent},
      {path:'PDF',component:PatientviewpdfComponent},
    ]
  } 
 ]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(doctorRoute),
],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // constructor(private service: SharedService) {}

  //   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITblPatients> {
  //       const id = route.params['id'] ? route.params['id'] : null;
  //       if (id) {
  //           return this.service.find(id).pipe(
  //               filter((response: HttpResponse<TblPatients>) => response.ok),
  //               map((tblUnit: HttpResponse<TblPatients>) => tblUnit.body)
  //           );
  //       }
  //       return of(new TblPatients());
  //   }
 }
