import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-resultatdiagnosticseinone',
  templateUrl: './resultatdiagnosticseinone.component.html',
  styleUrls: ['./resultatdiagnosticseinone.component.scss']
})
export class ResultatdiagnosticseinoneComponent implements OnInit {
  addResForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  accept(){}

}
