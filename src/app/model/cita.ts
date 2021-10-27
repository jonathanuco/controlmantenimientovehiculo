import { Propietario } from "./propietrio";
import { Vehiculo } from "./vehiculo";

export class Cita {
  idCita: number;
  propietario = new Propietario();
  vehiculo = new Vehiculo();
  descripcion: string;
  fecha: string;

}
