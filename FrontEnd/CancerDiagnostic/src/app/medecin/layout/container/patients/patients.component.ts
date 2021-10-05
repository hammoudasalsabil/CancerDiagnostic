import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/services/shared.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/auth.model';  
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  PatientsList: any = [];
  PatientsDocList: any = [];
  user: User;
  userSub: Subscription;
  patient: any;
  constructor(private service:SharedService, private authService:AuthService,private router: Router) { }

  ngOnInit(): void {
    this.refreshPatientsList();
    this.userSub = this.authService.user.subscribe(
      (data: User) => {
        this.user = data
      }
    )
  }

  refreshPatientsList(){
    this.service.getPatientsList().subscribe(data=>{
      this.PatientsList = data;
      this.PatientsList.forEach((element, index)=>{
        if(element["IdUser"] != this.user.id) delete this.PatientsList[index];

        if(element["IdUser"] == this.user.id)  this.PatientsDocList.push(this.PatientsList[index]);
     });
    });
  }

  // Editpatient(IdPatient: number){
  //   this.router.navigate(['/patientsEdit',IdPatient])
  // }

  addclick(){
    this.patient = {
      patientId: 0,
      patientName:"",
      patientLastname:"",
      patientPhone:"",
      patientTown:"",
      patientUsser:""}
  }

  editPatient(id:number){
  this.router.navigate(['/Doctor/patientsEdit',id])
  }
  showPatient(id:number){

    this.router.navigate(['/Doctor/patientsView',id])
  }
  deletePatient(id:number){
  }
}
