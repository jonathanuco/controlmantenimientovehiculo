import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Propietario } from "src/app/model/propietrio";
import { ServiceUtil } from "src/app/util/service-util";

const URL_BASE = 'http://localhost:8082/v1/propietario';

@Injectable({
  providedIn: 'root'
})

export class PropietarioService {

  constructor(private http: HttpClient, private serviceUtil: ServiceUtil) { }

  listarPropietarios(): Observable<Propietario[]>{
    return this.http.get<Propietario[]>(URL_BASE, {headers: this.serviceUtil.getSimpleHeader()});
  }
}
