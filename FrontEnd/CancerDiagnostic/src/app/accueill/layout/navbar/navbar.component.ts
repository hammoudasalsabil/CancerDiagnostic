import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/auth.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isAuthenticated:boolean = false;
  isdoc : boolean = false;
  isadmin : boolean = false;
  user: User;
  private userSub: Subscription;
  constructor(private authService: AuthService,  private router: Router ) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user)=>{
      this.isAuthenticated =!user? false: true;
    })
    if(this.isAuthenticated){
      this.userSub = this.authService.user.subscribe(
        (data: User) => {
          this.user = data
          if (this.user.is_superuser){
            this.isadmin = true
          }else{
            this.isdoc = true
          }
          
        }
      )}
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
  onLogout(){
    this.authService.logout();
    this.router.navigate([''])
  }
}
