import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/auth.model';
import { ITblDiagBain } from 'src/app/model/diagnostic-brain-1.model';
import { ITblResultatdiagnosticcerveauone } from 'src/app/model/Resultatdiagnosticcerveauone.model';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-resultatdiagnosticcerveauone',
  templateUrl: './resultatdiagnosticcerveauone.component.html',
  styleUrls: ['./resultatdiagnosticcerveauone.component.scss']
})
export class ResultatdiagnosticcerveauoneComponent implements OnInit {

  tblResultatdiagnosticcerveauoneList:ITblResultatdiagnosticcerveauone[];
  tblResultdiagcerveauone:ITblResultatdiagnosticcerveauone;
  idPatient:number; 
  user: User;
  userSub: Subscription;
  idDiagCerveau:number;
  tblDiagBrainList:ITblDiagBain[];
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

    

    this.idDiagCerveau=0;
    this.service.getDiagnosticBrainOne().subscribe(res =>{
      this.tblDiagBrainList = res;
      this.tblDiagBrainList.forEach(element=>{
        this.idDiagCerveau = element.dDiagnostic;
        console.log("this.idDiagBreast:",this.idDiagCerveau)
        ////////////////////////////////

       this.service.getResultBrainOne().subscribe(data=>{
      this.tblResultatdiagnosticcerveauoneList = data;

      this.tblResultatdiagnosticcerveauoneList.forEach((element, index)=>{
        if(element['IdDiagnostic'] == this.idDiagCerveau)  {
          this.tblResultdiagcerveauone=this.tblResultatdiagnosticcerveauoneList[index];
          console.log(this.tblResultdiagcerveauone);

          this.addpatientForm = new FormGroup({
            'Resultat': new FormControl(this.tblResultdiagcerveauone.Resultat,[Validators.required]),
            'IRM': new FormControl(this.tblResultdiagcerveauone.IRM,[Validators.required])
          })
        }

          });
    });





      })
    })

  }
  
  accept(){}

}
