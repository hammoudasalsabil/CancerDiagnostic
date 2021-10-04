import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/auth.model';
import { AuthService } from 'src/app/services/auth.service';
import {SharedService} from 'src/app/services/shared.service';

@Component({
  selector: 'app-patientadd',
  templateUrl: './patientadd.component.html',
  styleUrls: ['./patientadd.component.scss']
})
export class PatientaddComponent implements OnInit {

  user: User;
  userSub: Subscription;
  addpatientForm: FormGroup;

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
    
    this.service.addPatient(this.addpatientForm.value).subscribe(res=>{
      alert(res.toString());
    });
  }

}