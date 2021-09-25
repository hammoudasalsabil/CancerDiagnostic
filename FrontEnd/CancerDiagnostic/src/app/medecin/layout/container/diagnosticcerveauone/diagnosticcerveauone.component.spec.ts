import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticcerveauoneComponent } from './diagnosticcerveauone.component';

describe('DiagnosticcerveauoneComponent', () => {
  let component: DiagnosticcerveauoneComponent;
  let fixture: ComponentFixture<DiagnosticcerveauoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosticcerveauoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticcerveauoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
