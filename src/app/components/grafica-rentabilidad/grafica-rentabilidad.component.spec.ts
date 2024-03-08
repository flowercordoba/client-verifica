import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaRentabilidadComponent } from './grafica-rentabilidad.component';

describe('GraficaRentabilidadComponent', () => {
  let component: GraficaRentabilidadComponent;
  let fixture: ComponentFixture<GraficaRentabilidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficaRentabilidadComponent]
    });
    fixture = TestBed.createComponent(GraficaRentabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
