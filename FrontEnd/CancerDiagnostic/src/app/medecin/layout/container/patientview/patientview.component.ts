  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
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

    }

  }
