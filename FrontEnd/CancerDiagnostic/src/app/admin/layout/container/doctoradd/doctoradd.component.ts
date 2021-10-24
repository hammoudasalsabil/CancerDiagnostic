import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { singupModel, User } from 'src/app/auth.model';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-doctoradd',
  templateUrl: './doctoradd.component.html',
  styleUrls: ['./doctoradd.component.scss']
})
export class DoctoraddComponent implements OnInit {
  user: User;
  userSub: Subscription;
  adddoctorForm: FormGroup;
  tbldoctor:any={}

  constructor(private service:SharedService, private authService:AuthService,private router: Router) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(
      (data: User) => {
        this.user = data
      }
    )
    this.adddoctorForm = new FormGroup({
      'name': new FormControl(null,[Validators.required]),
      'username': new FormControl(null,[Validators.required]),
      'email': new FormControl(null,[Validators.required]),
      'password': new FormControl(null,[Validators.required]),
      //'is_superuser': new FormControl(false,[Validators.required])
      
    })
  }
  addDoctor(){
    this.tbldoctor = this.adddoctorForm.value;
    console.log("this.adddoctorForm.value",this.adddoctorForm.value);
    console.log("this.tblpatient",this.tbldoctor );
    this.service.addDoctor(this.tbldoctor ).subscribe(res=>{
      this.router.navigate(['/Admin/doctor'])
    });
  }

}
