import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cita } from 'src/app/model/cita';
import { ComandoCita } from 'src/app/comando/comando-cita';
import { ServiceUtil } from 'src/app/util/service-util';

const URL_BASE = 'http://localhost:8082/v1/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private http: HttpClient, private serviceUtil: ServiceUtil) { }

  listarCitas(): Observable<Cita[]>{
    return this.http.get<Cita[]>(URL_BASE, {headers: this.serviceUtil.getSimpleHeader()});
  }

  consultarPorId(idCita: number): Observable<Cita>{
    return this.http.get<Cita>(`${URL_BASE}/${idCita}`, {headers: this.serviceUtil.getSimpleHeader()});
  }

  actualizar(comandoCita: ComandoCita): Observable<Cita>{
    return this.http.put<Cita>(`${URL_BASE}/${comandoCita.idCita}`, comandoCita, {headers: this.serviceUtil.getJsonHeader()});
  }

  insertar(comandoCita: ComandoCita): Observable<Cita>{
    return this.http.post<Cita>(URL_BASE, comandoCita, {headers: this.serviceUtil.getJsonHeader()});
 }

 eliminar(idCita: number): Observable<Cita>{
   return this.http.delete<Cita>(`${URL_BASE}/${idCita}`, {headers: this.serviceUtil.getSimpleHeader()});
 }

}
