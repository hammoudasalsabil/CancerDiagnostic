import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { singupModel, User } from 'src/app/auth.model';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-doctoredit',
  templateUrl: './doctoredit.component.html',
  styleUrls: ['./doctoredit.component.scss']
})
export class DoctoreditComponent implements OnInit {
  idDoctor:string;
  user: User;
  userSub: Subscription;
  editdoctorForm: FormGroup;
  tblDoctorList:User[];
  tbluser:any;
  tbldoctor: any = [];
  constructor(private service:SharedService,private router: Router,private authService:AuthService,private activatedRoute: ActivatedRoute) {
    this.idDoctor = this.activatedRoute.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(
      (data: User) => {
        this.user = data
      }
    )
    this.service.getUserList().subscribe(data=>{
      this.tblDoctorList=data;
      console.log("this.tblDoctorList = ",this.tblDoctorList)
      this.tblDoctorList.forEach((element,index)=>{
        if(element['id'] == this.idDoctor){
          this.tbluser = this.tblDoctorList[index];
          console.log("this.user = ",this.user)

          this.editdoctorForm = new FormGroup({
            'name': new FormControl(this.tbluser.name,[Validators.required]),
            'username': new FormControl(this.tbluser.username,[Validators.required]),
            'email': new FormControl(this.tbluser.email,[Validators.required]),
            'password': new FormControl(this.tbluser.password,[Validators.required]),
            //'is_superuser': new FormControl(false,[Validators.required])
            
          })
        }
      })

    })

  }
  editDoctor(){
    this.tbldoctor=this.editdoctorForm.value;
    console.log("this.editdoctorForm.value",this.editdoctorForm.value);
    console.log("this.tbldoctor",this.tbldoctor);
    this.service.updateUser(this.tbldoctor).subscribe(res=>{
    });
  }
}
