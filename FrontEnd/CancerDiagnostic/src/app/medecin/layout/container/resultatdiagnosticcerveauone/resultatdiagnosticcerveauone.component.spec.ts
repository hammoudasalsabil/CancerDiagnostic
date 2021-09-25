import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatdiagnosticcerveauoneComponent } from './resultatdiagnosticcerveauone.component';

describe('ResultatdiagnosticcerveauoneComponent', () => {
  let component: ResultatdiagnosticcerveauoneComponent;
  let fixture: ComponentFixture<ResultatdiagnosticcerveauoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultatdiagnosticcerveauoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatdiagnosticcerveauoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
