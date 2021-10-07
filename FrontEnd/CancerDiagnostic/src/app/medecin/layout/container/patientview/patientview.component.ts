import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITblDiagBain } from 'src/app/model/diagnostic-brain-1.model';
import { ITblDiagBreast } from 'src/app/model/diagnostic-breast-1.model';
import { ITblPatiens } from 'src/app/model/patient.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-patientview',
  templateUrl: './patientview.component.html',
  styleUrls: ['./patientview.component.scss']
})
export class PatientviewComponent implements OnInit {
idPatient:number;
PatientsList:ITblPatiens[];
Patient:ITblPatiens;
tblDiagnosticBreastOnes: ITblDiagBreast[];
tblDiagnosticBreastOneList: any=[];

tblDiagnosticBrainOnes: ITblDiagBain [];
tblDiagnosticBrainOneList: any=[];
  constructor(private service:SharedService,private activatedRoute: ActivatedRoute,) {
    this.idPatient = this.activatedRoute.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.service.getPatientsList().subscribe(data=>{
      this.PatientsList = data;

      this.PatientsList.forEach((element, index)=>{
        if(element['IdPatient'] == this.idPatient)  this.Patient=this.PatientsList[index];

          });
    });
    this.getdiagnstic();
    //this.getdiagnsticBrain();
  }
  getdiagnstic(){
    this.service.getDiagnosticBreastOne().subscribe(data =>{
      this.tblDiagnosticBreastOnes = data,
      console.log(this.tblDiagnosticBreastOnes);
      this.tblDiagnosticBreastOnes.forEach((element, index)=>{

        if(element['IdPatient'] != this.idPatient) delete this.tblDiagnosticBreastOnes[index];

        if(element['IdPatient'] == this.idPatient)  this.tblDiagnosticBreastOneList.push(this.tblDiagnosticBreastOnes[index]);

        console.log("tblDiagnosticBreastOneList :",this.tblDiagnosticBreastOneList);
      })
    })
  }
  // getdiagnsticBrain(){
  //   this.service.getDiagnosticBrainOne().subscribe(data =>{
  //     this.tblDiagnosticBrainOnes = data,
  //     console.log(this.tblDiagnosticBrainOnes);
  //     this.tblDiagnosticBrainOnes.forEach((element, index)=>{

  //       if(element['IdPatient'] != this.idPatient) delete this.tblDiagnosticBrainOnes[index];

  //       if(element['IdPatient'] == this.idPatient)  this.tblDiagnosticBrainOneList.push(this.tblDiagnosticBrainOnes[index]);

  //       console.log("tblDiagnosticBrainOneList :",this.tblDiagnosticBrainOneList);
  //     })
  //   })
  // }

}
