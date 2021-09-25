import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagnosticseintwo',
  templateUrl: './diagnosticseintwo.component.html',
  styleUrls: ['./diagnosticseintwo.component.scss']
})
export class DiagnosticseintwoComponent implements OnInit {
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
