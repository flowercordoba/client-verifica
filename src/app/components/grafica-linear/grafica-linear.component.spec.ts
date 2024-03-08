import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaLinearComponent } from './grafica-linear.component';

describe('GraficaLinearComponent', () => {
  let component: GraficaLinearComponent;
  let fixture: ComponentFixture<GraficaLinearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficaLinearComponent]
    });
    fixture = TestBed.createComponent(GraficaLinearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
