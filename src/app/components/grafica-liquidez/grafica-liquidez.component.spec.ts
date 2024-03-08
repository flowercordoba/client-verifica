import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaLiquidezComponent } from './grafica-liquidez.component';

describe('GraficaLiquidezComponent', () => {
  let component: GraficaLiquidezComponent;
  let fixture: ComponentFixture<GraficaLiquidezComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficaLiquidezComponent]
    });
    fixture = TestBed.createComponent(GraficaLiquidezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
