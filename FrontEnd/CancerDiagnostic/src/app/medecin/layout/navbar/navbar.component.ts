import { provideRoutes } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/auth.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
import { ITblAlerts, TblAlerts } from 'src/app/model/alert.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isAuthenticated:boolean = false;
  private userSub: Subscription;
  alertlist:any= [];
  nbrDiagBreastOne:number;
  nbrDiagBreastTwo:number;
  nbrDiagBrainOne:number;
  nbrDiagBrainTow:number;
  notvue: Boolean = true;
  nbrDiagTotal:number;
  thblAlert:ITblAlerts={};
  nbrAlert:number;

  constructor(private authService: AuthService, private router: Router,private Service: SharedService ) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user)=>{
      this.isAuthenticated =!user? false: true;
    })
    this.getAlert();
    this.getNbrDiag();
  }
  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
  onLogout(){
    this.authService.logout();
    this.router.navigate([''])
  }
  getAlert(){
    this.Service.getAlert().subscribe(data=>{
      this.alertlist=data;
      this.nbrAlert=data.length;
     

      console.log("alertlist lawla = ",this.alertlist)
    })
  }
  getNbrDiag(){
  this.nbrDiagBreastOne=0;
  this.nbrDiagBreastTwo=0;
  this.nbrDiagBrainOne=0;
  this.nbrDiagBrainTow=0;
  this.nbrDiagTotal=0;

  this.Service.getDiagnosticBreastOne().subscribe(data=>{
    this.nbrDiagBreastOne=data.length;
    console.log("nbrDiagBreastOne = ",this.nbrDiagBreastOne)

    this.Service.getDiagnosticBrainOne().subscribe(data=>{
      this.nbrDiagBrainOne=data.length;
      console.log("nbrDiagBrainOne = ",this.nbrDiagBrainOne);

      this.Service.getDiagnosticBreastTwo().subscribe(data=>{
        this.nbrDiagBreastTwo=data.length;
        console.log("nbrDiagBreastTwo = ",this.nbrDiagBreastTwo)

        this.Service.getDiagnosticBrainTow().subscribe(data=>{
          this.nbrDiagBrainTow=data.length;
          console.log("nbrDiagBrainTow = ",this.nbrDiagBrainTow)
          //total:
          this.nbrDiagTotal=this.nbrDiagBreastOne + this.nbrDiagBrainOne + this.nbrDiagBreastTwo +this.nbrDiagBrainTow;
          console.log("nbrDiagTotal = ",this.nbrDiagTotal);
         
          if(this.nbrAlert == 0){
              this.notvue = false;
            }

          //   this.thblAlert.Text=  "abdgffggdfdsszeqdgrts";
          //   this.thblAlert.Date="2021-08-11";
          //   this.Service.addAlert(this.thblAlert).subscribe(res=>{
          //     console.log("alerts==",this.thblAlert)
          //   });
  
          //}
        })
    
      
      })
    })
  })
  }

  

}
