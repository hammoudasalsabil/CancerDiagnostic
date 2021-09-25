import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagnosticcerveautwo',
  templateUrl: './diagnosticcerveautwo.component.html',
  styleUrls: ['./diagnosticcerveautwo.component.scss']
})
export class DiagnosticcerveautwoComponent implements OnInit {
  
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
