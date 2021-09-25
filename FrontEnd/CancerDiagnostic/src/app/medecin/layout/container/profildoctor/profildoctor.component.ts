import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-profildoctor',
  templateUrl: './profildoctor.component.html',
  styleUrls: ['./profildoctor.component.scss']
})
export class ProfildoctorComponent implements OnInit {
  message: any;
  
  constructor(private pService: SharedService) { }

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
