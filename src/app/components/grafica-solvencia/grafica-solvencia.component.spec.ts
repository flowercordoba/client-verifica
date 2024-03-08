import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaSolvenciaComponent } from './grafica-solvencia.component';

describe('GraficaSolvenciaComponent', () => {
  let component: GraficaSolvenciaComponent;
  let fixture: ComponentFixture<GraficaSolvenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficaSolvenciaComponent]
    });
    fixture = TestBed.createComponent(GraficaSolvenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
