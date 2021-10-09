import { DatePipe } from '@angular/common';
import { HttpResponse } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { User } from 'src/app/auth.model';
import { ITblDiagBreast } from 'src/app/model/diagnostic-breast-1.model';
import { ITblPatiens, TblPatiens } from 'src/app/model/patient.model';
import { ITblSign } from 'src/app/model/sign.model';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-diagnosticseinone',
  templateUrl: './diagnosticseinone.component.html',
  styleUrls: ['./diagnosticseinone.component.scss']
})
export class DiagnosticseinoneComponent implements OnInit {
  result: boolean=false;
  tblSign: ITblSign[];
  diagbreast:ITblDiagBreast;
  tbldiag:any[];
  user: User;
  userSub: Subscription;
  addDiagForm: FormGroup;
  Patient:TblPatiens;
  idPatient:number;
  PatientsList:ITblPatiens[];
  myDate: string;
  
  
  constructor( private service:SharedService, private authService:AuthService,private activatedRoute: ActivatedRoute, private router: Router ) {

    this.idPatient = this.activatedRoute.snapshot.params['id'];

   }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(
      (data: User) => {
        this.user = data
      }
    )
//test get getDiagnosticBreastOne = console
    this.service.getDiagnosticBreastOne().subscribe(data =>{
      this.tbldiag = data,
      console.log(this.tbldiag);
    })
// fin test.
    this.service.getPatientsList().subscribe(data=>{
      this.PatientsList = data;

      this.PatientsList.forEach((element, index)=>{
        if(element['IdPatient'] == this.idPatient)  this.Patient=this.PatientsList[index];
          });
    });

    this.getSign();
    this.addDiagForm = new FormGroup({
      'Age': new FormControl(null,[]),
      'Maternite': new FormControl(null,[Validators.required]),
      'Contraception': new FormControl(null,[Validators.required]),
      'Antecedent_F': new FormControl(null,[Validators.required]),
      'Antecedent': new FormControl(null,[Validators.required]),
      'Cycle': new FormControl(null,[Validators.required]),
      'IdSign': new FormControl(null, [Validators.required]),
      //'IdPatient': new FormControl(this.Patient.IdPatient, [])
      //'IdPatient': new FormControl(this.Patient, [Validators.required]),
    })
  }
  getSign(){
    this.service.getSigne()
            .subscribe((res: ITblSign[]) => {
              this.tblSign = res;
              console.log(this.tblSign)
            })
  }
  resultat(){
    if(this.result){
      this.result = !this.result
    }
    else
    this.result = !this.result
  }

  addDiag(){
    this.diagbreast = this.addDiagForm.value;
    //this.diagbreast.Date = "2021-02-17";
    //this.diagbreast.Age = 52;
    this.diagbreast.IdPatient=   this.Patient.IdPatient;
    console.log("this.diagbreast.IdPatient",this.diagbreast.IdPatient);
    console.log("this.idpatient",this.diagbreast);

    this.service.addDiagnosticBreastOne(this.diagbreast).subscribe(res=>{
      alert(res.toString());
      if(this.result){
        this.result = !this.result
      }
      else
      this.result = !this.result
    });
  }
  onBack(){
    this.router.navigate(['/Doctor/patientsView',this.idPatient])
  }
}
