import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientseditComponent } from './patientsedit.component';

describe('PatientseditComponent', () => {
  let component: PatientseditComponent;
  let fixture: ComponentFixture<PatientseditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientseditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
