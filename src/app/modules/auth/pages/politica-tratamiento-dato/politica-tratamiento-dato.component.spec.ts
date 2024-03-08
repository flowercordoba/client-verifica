import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaTratamientoDatoComponent } from './politica-tratamiento-dato.component';

describe('PoliticaTratamientoDatoComponent', () => {
  let component: PoliticaTratamientoDatoComponent;
  let fixture: ComponentFixture<PoliticaTratamientoDatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoliticaTratamientoDatoComponent]
    });
    fixture = TestBed.createComponent(PoliticaTratamientoDatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
