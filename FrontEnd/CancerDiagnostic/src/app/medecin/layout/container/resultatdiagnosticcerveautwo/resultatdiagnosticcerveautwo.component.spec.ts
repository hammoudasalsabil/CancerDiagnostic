import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatdiagnosticcerveautwoComponent } from './resultatdiagnosticcerveautwo.component';

describe('ResultatdiagnosticcerveautwoComponent', () => {
  let component: ResultatdiagnosticcerveautwoComponent;
  let fixture: ComponentFixture<ResultatdiagnosticcerveautwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultatdiagnosticcerveautwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatdiagnosticcerveautwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
