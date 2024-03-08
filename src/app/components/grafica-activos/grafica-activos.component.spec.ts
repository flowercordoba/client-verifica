import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaActivosComponent } from './grafica-activos.component';

describe('GraficaActivosComponent', () => {
  let component: GraficaActivosComponent;
  let fixture: ComponentFixture<GraficaActivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficaActivosComponent]
    });
    fixture = TestBed.createComponent(GraficaActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
