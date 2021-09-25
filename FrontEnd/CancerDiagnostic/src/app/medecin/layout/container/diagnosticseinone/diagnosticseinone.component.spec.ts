import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticseinoneComponent } from './diagnosticseinone.component';

describe('DiagnosticseinoneComponent', () => {
  let component: DiagnosticseinoneComponent;
  let fixture: ComponentFixture<DiagnosticseinoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosticseinoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticseinoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
