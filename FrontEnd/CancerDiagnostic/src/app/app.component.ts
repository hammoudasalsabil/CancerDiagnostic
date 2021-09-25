import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CancerDiagnostic';
  message: any;
  
  constructor(private pService: SharedService){

  }
  ngOnInit(): void {
    this.showmsg();
  }
  showmsg(){
   this.pService.getAccuiell().subscribe(data=>{
     this.message = data,
     console.log(this.message);
   });
  }
 
}
