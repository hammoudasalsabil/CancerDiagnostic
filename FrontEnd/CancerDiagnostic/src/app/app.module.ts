import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccueilModule } from './accueill/accueil.module';
import { AdminModule } from './admin/admin.module';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedecinModule } from './medecin/medecin.module';
import { UnlessDirective } from './unless.directive';

import { SharedService } from './services/shared.service';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PatientsComponent } from './admin/layout/container/patients/patients.component' ;

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    MedecinModule,
    AccueilModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
 
  providers: [AuthService, SharedService],
  bootstrap: [AppComponent],
})
export class AppModule { }
