import { provideRoutes } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/auth.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
import { ITblAlerts, TblAlerts } from 'src/app/model/alert.model';
import { ThisReceiver } from '@angular/compiler';
import { ITblUser } from 'src/app/model/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isAuthenticated:boolean = false;
  private userSub: Subscription;
  alertlist:ITblAlerts[];
  tblAlertNew:any=[];
  nbrDiagBreastOne:number;
  nbrDiagBreastTwo:number;
  nbrDiagBrainOne:number;
  nbrDiagBrainTow:number;
  notvue: Boolean = true;
  nbrDiagTotal:number;
  thblAlert:ITblAlerts={};
  nbrAlert:number;
  Notification:boolean = false;
  id:number;
  tbluser:ITblUser[];
  user: User;

  constructor(private authService: AuthService, private router: Router,private Service: SharedService ) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user)=>{
      this.isAuthenticated =!user? false: true;
      this.user = user
    })
    this.getAlert();
    this.getNbrDiag();
    this.clickEventNotification();
    
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
       //this.nbrAlert=data.length;
     

      console.log("alertlist lawla = ",this.alertlist)
      
    })
  }
  
  clickEventNotification(){
    this.nbrAlert = 0;
    this.Notification = !this.Notification;
    

  }
  getNbrDiag(){
    this.Service.getUserList().subscribe(element=>{
      this.tbluser=element;
      
      console.log("this.tbluser =",this.tbluser)
      this.tbluser.forEach((element, index)=>{
        if(element["id"] == this.user.id){
          
          console.log("this.user.id =",this.user.id)
          this.id = element.nb_alertes;
          console.log("this.id =",this.id)
          this.Service.getAlert().subscribe(res=>{
            this.alertlist = res;
            this.alertlist.forEach((element, index)=>{
              if(element["IdAlerte"] < this.id) delete this.alertlist[index];
      
              if(element["IdAlerte"] > this.id) {
                this.tblAlertNew.push(this.alertlist[index]);
                console.log("this.tblAlertNew = ", this.tblAlertNew)
                this.nbrAlert=this.tblAlertNew.length;
                console.log("this.nbrAlert = ", this.nbrAlert)
              } 
           });
          })
        }
     });
    })

  }

}
