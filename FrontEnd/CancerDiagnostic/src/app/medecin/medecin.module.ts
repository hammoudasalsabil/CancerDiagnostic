import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './doctor.route';
import { LayoutComponent } from './layout/layout.component';
import { ContainerComponent } from './layout/container/container.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidbarComponent } from './layout/sidbar/sidbar.component';
import { ProfildoctorComponent } from './layout/container/profildoctor/profildoctor.component';
import { PatientsComponent } from './layout/container/patients/patients.component';
import { RulesComponent } from './layout/container/rules/rules.component';
import { PatientseditComponent } from './layout/container/patientsedit/patientsedit.component';
import { PatientviewComponent } from './layout/container/patientview/patientview.component';
import { PatientaddComponent } from './layout/container/patientadd/patientadd.component';
import { DiagnosticseinoneComponent } from './layout/container/diagnosticseinone/diagnosticseinone.component';
import { DiagnosticseintwoComponent } from './layout/container/diagnosticseintwo/diagnosticseintwo.component';
import { ResultatdiagnosticseinoneComponent } from './layout/container/resultatdiagnosticseinone/resultatdiagnosticseinone.component';
import { ResultatdiagnosticseintowComponent } from './layout/container/resultatdiagnosticseintow/resultatdiagnosticseintow.component';
import { ResultatdiagnosticcerveauoneComponent } from './layout/container/resultatdiagnosticcerveauone/resultatdiagnosticcerveauone.component';
import { ResultatdiagnosticcerveautwoComponent } from './layout/container/resultatdiagnosticcerveautwo/resultatdiagnosticcerveautwo.component';
import { DiagnosticcerveautwoComponent } from './layout/container/diagnosticcerveautwo/diagnosticcerveautwo.component';
import { DiagnosticcerveauoneComponent } from './layout/container/diagnosticcerveauone/diagnosticcerveauone.component';
import { PatientviewpdfComponent } from './layout/container/patientviewpdf/patientviewpdf.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  
    LayoutComponent,
       ContainerComponent,
       FooterComponent,
       NavbarComponent,
       SidbarComponent,
       ProfildoctorComponent,
       PatientsComponent,
       RulesComponent,
       PatientseditComponent,
       PatientviewComponent,
       PatientaddComponent,
       DiagnosticseinoneComponent,
       DiagnosticseintwoComponent,
       ResultatdiagnosticseinoneComponent,
       ResultatdiagnosticseintowComponent,
       ResultatdiagnosticcerveauoneComponent,
       ResultatdiagnosticcerveautwoComponent,
       DiagnosticcerveautwoComponent,
       DiagnosticcerveauoneComponent,
       PatientviewpdfComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ]
})
export class MedecinModule { }
