import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-diagnosticcerveauone',
  templateUrl: './diagnosticcerveauone.component.html',
  styleUrls: ['./diagnosticcerveauone.component.scss']
})
export class DiagnosticcerveauoneComponent implements OnInit {
  result: boolean=false;
  idPatient:number;

  constructor( private service:SharedService, private authService:AuthService,private activatedRoute: ActivatedRoute, private router: Router ) {

    this.idPatient = this.activatedRoute.snapshot.params['id'];

   }

  ngOnInit(): void {
  }

  resultat(){
    if(this.result){
      this.result = !this.result
    }
    else
    this.result = !this.result
  }
  onBack(){
    this.router.navigate(['/Doctor/patientsView',this.idPatient])
  }
}
