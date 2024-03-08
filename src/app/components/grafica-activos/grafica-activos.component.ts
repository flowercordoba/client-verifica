import { Component } from '@angular/core';
import Chart, { ChartType } from 'chart.js/auto';
@Component({
  selector: 'app-grafica-activos',
  templateUrl: './grafica-activos.component.html',
  styleUrls: ['./grafica-activos.component.scss']
})
export class GraficaActivosComponent {

  // Atributo que almacena los datos del chart
  public chart: Chart;

  ngOnInit(): void {
    // Datos
    const data = {
      labels: ['2023', '2024', '2025', '2026', '2027', '2028'], // Etiquetas de años
      datasets: [
        {
          label: 'Patrimonio contable', // Cambiado para coincidir con el gráfico de la imagen
          data: [80, 80, 80, 80, 80, 80], // Datos ficticios, reemplazar con los datos reales
          backgroundColor: 'rgba(255, 0, 0, 0.8)', // Rojo con transparencia
          borderColor: 'rgb(255, 0, 0)', // Borde rojo
          borderWidth: 1
        },
        {
          label: 'Endeudamiento', // Cambiado para coincidir con el gráfico de la imagen
          data: [20, 20, 20, 20, 20, 20], // Datos ficticios, reemplazar con los datos reales
          backgroundColor: 'rgba(0, 0, 255, 0.8)', // Azul con transparencia
          borderColor: 'rgb(0, 0, 255)', // Borde azul
          borderWidth: 1
        }
      ]
    };

    // Opciones de configuración para el gráfico de barras apiladas
    const options = {
      scales: {
        x: {
          stacked: true, // Apila las barras en el eje x
        },
        y: {
          stacked: true, // Apila las barras en el eje y
          ticks: {
            callback: function(value) {
              return value + "%" // Añade un signo de porcentaje a las etiquetas del eje Y
            }
          },
          max: 100 // Establece el máximo del eje Y en 100 para porcentajes
        }
      },
      plugins: {
        legend: {
          display: true // Muestra la leyenda
        }
      }
    };

    // Creamos la gráfica
    this.chart = new Chart("chart", {
      type: 'bar' as ChartType, // Tipo de gráfica
      data: data, // Datos
      options: options // Opciones
    });

  }
}
