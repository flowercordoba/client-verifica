import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaPasivosComponent } from './grafica-pasivos.component';

describe('GraficaPasivosComponent', () => {
  let component: GraficaPasivosComponent;
  let fixture: ComponentFixture<GraficaPasivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficaPasivosComponent]
    });
    fixture = TestBed.createComponent(GraficaPasivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
