import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/services/shared.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/auth.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  constructor(private service:SharedService, private authService:AuthService,private router: Router ) { }

  DoctorsList: any = [];
  Doctors: any = [];
  user: User;
  userSub: Subscription;
  message: any = [];
  ngOnInit(): void {
    this.refreshDocList();
    this.showmsg();
    this.userSub = this.authService.user.subscribe(
      (data: User) => {
        this.user = data
      }
    )
    this.getDoctors();
  }
  onBack(){
    this.router.navigate(['/Admin'])
  }
  refreshDocList(){
    this.service.getUserList().subscribe(data=>{
      this.DoctorsList = data;
    });
  }

  getDoctors(){
    this.service.getUserList().subscribe(data=>{
      this.DoctorsList = data;
      console.log("this.DoctorsList ==== :",this.DoctorsList);

      this.DoctorsList.forEach((element, index)=>{
        if(element["is_superuser"] == true) delete this.DoctorsList[index];

        if(element["is_superuser"] == false){  
          this.Doctors.push(this.DoctorsList[index]);
          
        }
     });
    });
  }
  showmsg(){
    this.service.getUserList().subscribe(data=>{
      this.message = data,
      console.log(this.message);
    });
   }

  onShow(){
  this.router.navigate(['/Admin/editDoctor'])
  }

  onDelet(){
  this.router.navigate(['/Admin'])
  }
}
