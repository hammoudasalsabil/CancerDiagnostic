import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/auth.model';
import { ITblPatiens } from 'src/app/model/patient.model';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-profildoctor',
  templateUrl: './profildoctor.component.html',
  styleUrls: ['./profildoctor.component.scss']
})
export class ProfildoctorComponent implements OnInit {
  message: any;
  user: User;
  userSub: Subscription;
  nbrPatient:number;
  PatientsList: any = [];
  PatientsDocList: any = [];
  
  constructor(private pService: SharedService, private authService:AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(
      (data: User) => {
        this.user = data
      }
    )
    this.showmsg();
    this.getNbrPatient();
  }
  getNbrPatient(){
    this.nbrPatient=0;
    this.pService.getPatientsList().subscribe(data=>{
      this.PatientsList = data;

      this.PatientsList.forEach((element, index)=>{
        if(element["IdUser"] != this.user.id) delete this.PatientsList[index];

        if(element["IdUser"] == this.user.id)  {
          this.PatientsDocList.push(this.PatientsList[index]);
          this.nbrPatient= this.nbrPatient + 1;}
        
     });
    })

  }
  showmsg(){
   this.pService.getAccuiell().subscribe(data=>{
     this.message = data,
     console.log(this.message);
   });
  }
}
