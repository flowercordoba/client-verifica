import { Component } from '@angular/core';
import { Chart, ChartType, registerables } from 'chart.js';

// Registramos todos los elementos necesarios de Chart.js
Chart.register(...registerables);
@Component({
  selector: 'app-grafica-liquidez',
  templateUrl: './grafica-liquidez.component.html',
  styleUrls: ['./grafica-liquidez.component.scss']
})
export class GraficaLiquidezComponent {
  public chart: Chart<"line", number[], string>;

  ngOnInit(): void {
    // Datos para el gráfico con dos conjuntos de datos
    const data = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],

      datasets: [
        {
          label: 'Razon corriente',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#36A2EB', // Azul
          backgroundColor: '#36A2EB',
          tension: 0.1
        },
        {
          label: 'Prueba acida',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#FF6384', // Rosa
          backgroundColor: '#FF6384',
          tension: 0.1
        },
        {
          label: 'Parametro',
          data: [18, 30, 45, 22, 60, 20, 10],
          fill: false,
          borderColor: '#FFCE56', // Amarillo
          backgroundColor: '#FFCE56',
          tension: 0.1
        }
      ]
    };

    // Configuración del gráfico
    this.chart = new Chart("chart", {
      type: 'line',
      data,
      options: {
        plugins: {
          title: {
            display: true,
            text: 'RAZON CORRIENTE & PRUEBA ACIDA', // Título que quieres mostrar
            font: {
              size: 16 // Tamaño de la fuente del título
            }
          }
        }
      }
    });
  }
}
