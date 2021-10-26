import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/auth.model';
import { ITblRegles } from 'src/app/model/regles.model';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {

  user: User;
  userSub: Subscription;
  tblReglesList:ITblRegles[];
  tblRegles: any = [];
  
  constructor(private service:SharedService, private authService:AuthService,private router: Router) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(
      (data: User) => {
        this.user = data
        console.log("User est :",data)
        
      console.log("nbrPatient de user  est: ",this.user.nb_patients)
      }
    )
    this.getRules();
  }
  getRules(){
    this.service.getRules().subscribe(element=>{
      this.tblReglesList=element;
      this.tblReglesList.forEach((element, index)=>{
        this.tblRegles.push( this.tblReglesList[index]); 
        console.log("this.tblRegles :",this.tblRegles)
      })

    })
  }
  pdf(){
    this.router.navigate(['/Doctor/PDF'])
  }

}
