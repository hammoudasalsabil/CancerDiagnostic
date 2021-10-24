import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/auth.model';
import { AuthService } from 'src/app/services/auth.service';
import {SharedService} from 'src/app/services/shared.service';
import { ITblPatiens } from 'src/app/model/patient.model';
import { ITblUser } from 'src/app/model/user.model';

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
  tbluser:ITblUser;

  constructor(private service:SharedService, private authService:AuthService,private router: Router) { }

  @Input() 

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(
      (data: User) => {
        this.user = data
        console.log("User est :",data)
      console.log("nbrPatient de user  est: ",data.nb_patients)
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
      this.user.nb_patients = this.user.nb_patients+ 1;
      console.log("nbrPatient de user  est: ",this.user.nb_patients)
      this.service.updateUser(this.user).subscribe(res=>{
      });
    });
  }

}