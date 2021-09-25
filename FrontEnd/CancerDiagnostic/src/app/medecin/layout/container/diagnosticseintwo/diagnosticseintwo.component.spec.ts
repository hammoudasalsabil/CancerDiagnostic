import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticseintwoComponent } from './diagnosticseintwo.component';

describe('DiagnosticseintwoComponent', () => {
  let component: DiagnosticseintwoComponent;
  let fixture: ComponentFixture<DiagnosticseintwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosticseintwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticseintwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
