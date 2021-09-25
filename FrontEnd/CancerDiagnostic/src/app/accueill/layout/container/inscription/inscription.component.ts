import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AuthResData } from 'src/app/auth.model';
import { first } from 'rxjs/operators';
import { User } from 'src/app/auth.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  user: User;
  userSub: Subscription;
  isLoginMode = true;
  loginForm: FormGroup;
  token: string;
  error:string=null;
  success:string=null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password': new FormControl(null,[Validators.required,Validators.minLength(8)])
    })
  }

 
 
  onLogin(){
    this.authService.login(this.loginForm.value)
    .subscribe(
      (data: AuthResData) => {
        this.token = data.token
        console.log(data)
        
        if(data.is_superuser){
          this.router.navigate(['/Admin'])
          return;
        }
        if(!data.is_superuser){
          this.router.navigate(['/Doctor'])
          return;
        }
      },(errorRes)=>{
        this.error=errorRes;
      }
    )
    this.loginForm.reset()
    

  }

 

}
