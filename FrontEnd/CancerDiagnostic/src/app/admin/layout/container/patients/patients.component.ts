import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/auth.model';
import { TblPatiens } from 'src/app/model/patient.model';
import { ITblUser } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  user: User;
  userSub: Subscription;
  DoctorsList: ITblUser[]=[];
  Doctors: ITblUser[]=[];
  Doctor: ITblUser;
  nbrPatients:number;
  tblPateintList:any = [];
  tblPateint: any = [];
  constructor(private service:SharedService, private authService:AuthService,private router: Router) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(
      (data: User) => {
        this.user = data
      }
    )
    this.getDoctors();
  }

  getDoctors(){
    this.service.getUserList().subscribe(data=>{
      this.DoctorsList = data;
      console.log("this.DoctorsList ==== :",this.DoctorsList);

      this.DoctorsList.forEach((element, index)=>{
        if(element["is_superuser"] == "1") delete this.DoctorsList[index];

        if(element["is_superuser"] == "0"){  
          this.Doctors.push(this.DoctorsList[index]);
          this.Doctor=element;
          
          this.service.getPatientsList().subscribe(res=>{
            this.tblPateintList=res;
            console.log("this.tblPateintList",this.tblPateintList)

            this.nbrPatients = 0;
            this.tblPateintList.forEach(patient=>{
              this.tblPateint=patient;
              console.log("id doctor:::::",element.id)
              console.log("id doctor patient:::::",patient.IdUser)
              if(patient.IdUser == element.id){
                this.nbrPatients=this.nbrPatients+1;
                console.log("this.nbrPatients =",this.nbrPatients)
              }
            })
            this.Doctor.nbrpatient=this.nbrPatients;
            console.log("this.Doctor.nbrpatient =",this.Doctor.nbrpatient)
          })
        }
     });
    });
  }

  onBack(){
    this.router.navigate(['/Admin'])
  }

}
