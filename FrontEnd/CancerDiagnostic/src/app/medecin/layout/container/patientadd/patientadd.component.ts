import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/auth.model';
import { AuthService } from 'src/app/services/auth.service';
import {SharedService} from 'src/app/services/shared.service';
import { ITblPatiens } from 'src/app/model/patient.model';

@Component({
  selector: 'app-patientadd',
  templateUrl: './patientadd.component.html',
  styleUrls: ['./patientadd.component.scss']
})
export class PatientaddComponent implements OnInit {

  user: User;
  userSub: Subscription;
  addpatientForm: FormGroup;
  tblpatient: ITblPatiens;

  constructor(private service:SharedService, private authService:AuthService,private router: Router) { }

  @Input() 

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(
      (data: User) => {
        this.user = data
      }
    )
    this.addpatientForm = new FormGroup({
      'Name': new FormControl(null,[Validators.required]),
      'LastName': new FormControl(null,[Validators.required]),
      'Phone': new FormControl(null,[Validators.required,Validators.minLength(8)]),
      'Town': new FormControl(null,[Validators.required]),
      'IdUser': new FormControl(this.user.id, [])
    })
  }

  addpatient(){
    this.tblpatient = this.addpatientForm.value;
    console.log("this.addpatientForm.value",this.addpatientForm.value);
    console.log("this.tblpatient",this.tblpatient);
    this.service.addPatient(this.tblpatient).subscribe(res=>{
    });
  }

}