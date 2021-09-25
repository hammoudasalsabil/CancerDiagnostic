import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagnosticseinone',
  templateUrl: './diagnosticseinone.component.html',
  styleUrls: ['./diagnosticseinone.component.scss']
})
export class DiagnosticseinoneComponent implements OnInit {
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
