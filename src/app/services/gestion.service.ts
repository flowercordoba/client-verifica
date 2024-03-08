import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionService {
  private apiUrl = 'https://7aa4-2800-e2-1900-816-48b6-b008-cc75-1a67.ngrok-free.app/api/gestion/calcular'; // Asegúrate de que la URL corresponda a tu configuración

  constructor(private http: HttpClient) { }

  calcularIndicadoresGestion(datos: any): Observable<any> {
    return this.http.post(this.apiUrl, datos);
  }
}
