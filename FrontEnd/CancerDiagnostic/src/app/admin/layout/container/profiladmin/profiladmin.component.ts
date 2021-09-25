import { provideRoutes } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/auth.model';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-profiladmin',
  templateUrl: './profiladmin.component.html',
  styleUrls: ['./profiladmin.component.scss']
})
export class ProfiladminComponent implements OnInit {
  user: User;
  userSub: Subscription;
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(
      (data: User) => {
        this.user = data
      }
    )
  }


}
