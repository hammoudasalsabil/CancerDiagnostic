import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatdiagnosticseintowComponent } from './resultatdiagnosticseintow.component';

describe('ResultatdiagnosticseintowComponent', () => {
  let component: ResultatdiagnosticseintowComponent;
  let fixture: ComponentFixture<ResultatdiagnosticseintowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultatdiagnosticseintowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatdiagnosticseintowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
