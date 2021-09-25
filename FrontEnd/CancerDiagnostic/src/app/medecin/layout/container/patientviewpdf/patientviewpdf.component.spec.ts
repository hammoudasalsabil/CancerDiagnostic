import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientviewpdfComponent } from './patientviewpdf.component';

describe('PatientviewpdfComponent', () => {
  let component: PatientviewpdfComponent;
  let fixture: ComponentFixture<PatientviewpdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientviewpdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientviewpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
