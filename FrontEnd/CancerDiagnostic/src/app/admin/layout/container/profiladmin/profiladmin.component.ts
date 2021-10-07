import { provideRoutes } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/auth.model';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-profiladmin',
  templateUrl: './profiladmin.component.html',
  styleUrls: ['./profiladmin.component.scss']
})
export class ProfiladminComponent implements OnInit {
  user: User;
  userSub: Subscription;
  DoctorsList: any = [];
  Doctors: any = [];
  nbrDoctor:number
  nbrPatient:number;
  PatientsList: any = [];
  PatientsDocList: any = [];

  constructor(private authService: AuthService, private service:SharedService) { }
  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(
      (data: User) => {
        this.user = data
      }
    )
    this.getDoctors();
    this.getNbrPatient();
  }
  getNbrPatient(){
    this.nbrPatient=0;
    this.service.getPatientsList().subscribe(data=>{
      this.PatientsList = data;

      console.log("this.PatientsList ==== :",this.PatientsList);
      this.PatientsList.forEach((element)=>{
        this.nbrPatient= this.nbrPatient + 1;
        console.log("this.nbrPatient ==== :",this.nbrPatient);
        
     });
    })

  }
  getDoctors(){
    this.nbrDoctor = 0;
    this.service.getUserList().subscribe(data=>{
      this.DoctorsList = data;
      console.log("this.DoctorsList ==== :",this.DoctorsList);

      this.DoctorsList.forEach((element, index)=>{
        if(element["is_superuser"] == true) delete this.DoctorsList[index];

        if(element["is_superuser"] == false){  
          this.Doctors.push(this.DoctorsList[index]);
          this.nbrDoctor= this.nbrDoctor + 1;
          console.log("this.nbrDoctor ==== :",this.nbrDoctor);
        }
     });
    });
  }


}
