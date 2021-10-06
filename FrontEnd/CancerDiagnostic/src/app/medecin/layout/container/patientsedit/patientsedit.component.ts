import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/auth.model';
import { ITblPatiens, TblPatiens } from 'src/app/model/patient.model';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-patientsedit',
  templateUrl: './patientsedit.component.html',
  styleUrls: ['./patientsedit.component.scss']
})
export class PatientseditComponent implements OnInit {
  idPatient:number;
  tblpatient: any = [];
  PatientsList:ITblPatiens[];
  Patient:ITblPatiens;
  addpatientForm: FormGroup;
  user: User;
  userSub: Subscription;
  name : string;
  
  constructor(private service:SharedService,private activatedRoute: ActivatedRoute, private authService:AuthService) {
    this.idPatient = this.activatedRoute.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(
      (data: User) => {
        this.user = data
      }
    )
    this.service.getPatientsList().subscribe(data=>{
      this.PatientsList = data;

      this.PatientsList.forEach((element, index)=>{
        if(element['IdPatient'] == this.idPatient)  {
          this.Patient=this.PatientsList[index];
          console.log(this.Patient);

          this.addpatientForm = new FormGroup({
             'Name' : new FormControl(this.Patient.Name,[Validators.required ]),
            'LastName': new FormControl(this.Patient.LastName,[Validators.required]),
            'Phone': new FormControl(this.Patient.Phone,[Validators.required,Validators.minLength(8)]),
            'Town': new FormControl(this.Patient.Town,[Validators.required]),
            'IdUser': new FormControl(this.user.id, []),
            'IdPatient': new FormControl(this.Patient.IdPatient, [])
          })
        }

          });
    });
          

   
    
  }

  updpatient(){
    this.tblpatient = this.addpatientForm.value;
    console.log("this.addpatientForm.value",this.addpatientForm.value);
    console.log("this.tblpatient",this.tblpatient);
    this.service.updatePatient(this.tblpatient).subscribe(res=>{
    });
  }

}
