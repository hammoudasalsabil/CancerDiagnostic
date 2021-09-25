import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagnosticcerveauone',
  templateUrl: './diagnosticcerveauone.component.html',
  styleUrls: ['./diagnosticcerveauone.component.scss']
})
export class DiagnosticcerveauoneComponent implements OnInit {
  result: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  resultat(){
    if(this.result){
      this.result = !this.result
    }
    else
    this.result = !this.result
  }
}
