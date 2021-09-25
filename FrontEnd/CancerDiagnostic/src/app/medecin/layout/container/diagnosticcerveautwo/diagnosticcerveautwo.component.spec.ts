import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticcerveautwoComponent } from './diagnosticcerveautwo.component';

describe('DiagnosticcerveautwoComponent', () => {
  let component: DiagnosticcerveautwoComponent;
  let fixture: ComponentFixture<DiagnosticcerveautwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosticcerveautwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticcerveautwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
