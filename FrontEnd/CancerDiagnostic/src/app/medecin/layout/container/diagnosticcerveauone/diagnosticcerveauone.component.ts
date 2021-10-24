import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/auth.model';
import { ITblDeficitNeurologique } from 'src/app/model/DeficitNeurologique.model';
import { ITblDiagBain } from 'src/app/model/diagnostic-brain-1.model';
import { TblPatiens } from 'src/app/model/patient.model';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-diagnosticcerveauone',
  templateUrl: './diagnosticcerveauone.component.html',
  styleUrls: ['./diagnosticcerveauone.component.scss']
})
export class DiagnosticcerveauoneComponent implements OnInit {
  result: boolean=false;
  idPatient:number;
  user: User;
  userSub: Subscription;
  addDiagForm: FormGroup;
  tblDiagBrain: ITblDiagBain
  Patient:TblPatiens;
  tblDeficitNeurologique:ITblDeficitNeurologique[];
  tblDiagBrainList: ITblDiagBain[];

  constructor( private service:SharedService, private authService:AuthService,private activatedRoute: ActivatedRoute, private router: Router ) {

    this.idPatient = this.activatedRoute.snapshot.params['id'];

   }

  ngOnInit(): void {
    
    this.userSub = this.authService.user.subscribe(
      (data: User) => {
        this.user = data
      }
    )
    this.getDeficitNeurologique();
    this.addDiagForm = new FormGroup({
      'Age': new FormControl(null,[]),
      'Vomissement': new FormControl(null,[Validators.required]),
      'CriseEpilepsie': new FormControl(null,[Validators.required]),
      'Cephalee': new FormControl(null,[Validators.required]),
      'Trouble_Cognitifs': new FormControl(null,[Validators.required]),
      'IdDeficitNeurologique': new FormControl(null,[Validators.required]),
      //'IdPatient': new FormControl(this.Patient.IdPatient, [])
      //'IdPatient': new FormControl(this.Patient, [Validators.required]),
    })
    this.service.getDiagnosticBrainOne().subscribe(res=>{
        this.tblDiagBrainList = res;
        console.log("tblDiagBrainList:",this.tblDiagBrainList)
    })
  }
  getDeficitNeurologique(){
    this.service.getDeficitNeurologique()
            .subscribe((res: ITblDeficitNeurologique[]) => {
              this.tblDeficitNeurologique = res;
              console.log(this.tblDeficitNeurologique)
            })
  }

  // resultat(){
  //   if(this.result){
  //     this.result = !this.result
  //   }
  //   else
  //   this.result = !this.result
  // }
  addDiag(){
    this.tblDiagBrain = this.addDiagForm.value;
    this.tblDiagBrain.IdPatient=   this.idPatient;
    console.log("this.tblDiagBrain.IdPatient",this.tblDiagBrain.IdPatient);
    console.log("this.idpatient",this.tblDiagBrain);

    this.service.addDiagnosticBrainOne(this.tblDiagBrain).subscribe(res=>{
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
