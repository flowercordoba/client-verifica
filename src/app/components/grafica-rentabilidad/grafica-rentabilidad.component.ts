import { Component } from '@angular/core';
import { Chart, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica-rentabilidad',
  templateUrl: './grafica-rentabilidad.component.html',
  styleUrls: ['./grafica-rentabilidad.component.scss']
})
export class GraficaRentabilidadComponent {
  public chart: Chart;

  ngOnInit(): void {
    const data = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril'], // Etiquetas del eje X
      datasets: [
        {
          label: 'Datos de ejemplo', // Título del conjunto de datos
          data: [10, 20, 30, 40], // Datos de ejemplo
          fill: false, // No rellenar bajo la línea
          borderColor: 'rgb(75, 192, 192)', // Color de la línea
          tension: 0.1 // Suavidad de la línea
        }
      ]
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true // Comenzar eje Y desde cero
        }
      },
      plugins: {
        legend: {
          display: true // Mostrar leyenda
        }
      }
    };

    this.chart = new Chart("chartLineal", {
      type: 'line' as ChartType,
      data: data,
      options: options
    });
  }
}
