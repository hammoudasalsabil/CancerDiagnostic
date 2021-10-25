import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/auth.model';
import { ITblDiagBreast } from 'src/app/model/diagnostic-breast-1.model';
import { ITblPatiens } from 'src/app/model/patient.model';
import { ITblResultBreastOne } from 'src/app/model/ResultBreastOne.model';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-resultatdiagnosticseinone',
  templateUrl: './resultatdiagnosticseinone.component.html',
  styleUrls: ['./resultatdiagnosticseinone.component.scss']
})
export class ResultatdiagnosticseinoneComponent implements OnInit {
  addResForm: FormGroup;
  tblDiagBreastlist:ITblDiagBreast[];
  idPatient:number;
  idDiagBreast:number;
  tblResultBreastOneList:ITblResultBreastOne[];
  tblResultBreastOne:ITblResultBreastOne;
  tblResultat: any = [];
  user: User;
  userSub: Subscription;
  addpatientForm: FormGroup;
  constructor( private service:SharedService, private authService:AuthService,private activatedRoute: ActivatedRoute, private router: Router ) {

    this.idPatient = this.activatedRoute.snapshot.params['id']; 
  }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(
      (data: User) => {
        this.user = data
      }
    ) 

    this.idDiagBreast =0;
    this.service.getDiagnosticBreastOne().subscribe(res =>{
      this.tblDiagBreastlist = res;
      this.tblDiagBreastlist.forEach(element=>{
        this.idDiagBreast = element.IdDiagnostic;
        console.log("this.idDiagBreast:",this.idDiagBreast)
        ////////////////////////////////

       this.service.getResultBreastOne().subscribe(data=>{
      this.tblResultBreastOneList = data;

      this.tblResultBreastOneList.forEach((element, index)=>{
        if(element['IdDiagnostic'] == this.idDiagBreast)  {
          this.tblResultBreastOne=this.tblResultBreastOneList[index];
          console.log(this.tblResultBreastOne);

          this.addpatientForm = new FormGroup({
            'Resultat': new FormControl(this.tblResultBreastOne.Resultat,[Validators.required,Validators.minLength(8)]),
            'CA15': new FormControl(this.tblResultBreastOne.CA15,[Validators.required]),
            'Echo': new FormControl(this.tblResultBreastOne.Echo,[Validators.required]),
          })
        }

          });
    });





      })
    })

  }

  accept(){
    this.tblResultat = this.addResForm.value;
    console.log("this.addpatientForm.value",this.addResForm.value);
    console.log("this.tblpatient",this.tblResultat);
    this.service.updateResultBreastOne(this.tblResultat).subscribe(res=>{
    });
  }
}
