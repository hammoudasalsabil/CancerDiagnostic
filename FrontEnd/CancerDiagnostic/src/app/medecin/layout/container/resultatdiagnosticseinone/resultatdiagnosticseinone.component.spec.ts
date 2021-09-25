import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatdiagnosticseinoneComponent } from './resultatdiagnosticseinone.component';

describe('ResultatdiagnosticseinoneComponent', () => {
  let component: ResultatdiagnosticseinoneComponent;
  let fixture: ComponentFixture<ResultatdiagnosticseinoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultatdiagnosticseinoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatdiagnosticseinoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
