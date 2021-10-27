import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ServiceUtil } from "src/app/util/service-util";
import { Vehiculo } from "src/app/modelo/vehiculo";

const URL_BASE = 'http://localhost:8082/v1/vehiculo';

@Injectable({
  providedIn: 'root'
})

export class VehiculoService {

  constructor(private http: HttpClient, private serviceUtil: ServiceUtil) { }

  listarVehiculos(): Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(URL_BASE, {headers: this.serviceUtil.getSimpleHeader()});
  }
}
