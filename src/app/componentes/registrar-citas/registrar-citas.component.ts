import { AfterContentInit, Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ComandoCita } from '../../comando/comando-cita';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehiculo } from 'src/app/model/vehiculo';
import { Cita } from 'src/app/model/cita';
import { Propietario } from 'src/app/model/propietrio';
import { PropietarioService } from 'src/app/servicios/propietario/propietario.service';
import { CitaService } from 'src/app/servicios/cita/cita.service';

@Component({
  selector: 'app-registrar-citas',
  templateUrl: './registrar-citas.component.html',
  styleUrls: ['./registrar-citas.component.css']
})
export class RegistrarCitasComponent implements AfterContentInit {

  propietarios: Propietario[];
  vehiculos: Vehiculo[];
  cita: Cita = new Cita();
  comandoCita: ComandoCita;
  idCita: number;
  titulo: string;

 constructor(private propietarioService: PropietarioService,
              
              private citaService: CitaService,
              private router: Router, private route: ActivatedRoute) {
              
                if(this.idCita === 0){
                  this.titulo = 'Registar cita';
                } else {
                  this.titulo = 'Editar cita';
                  this.consultarCitaPorId();
                }
              } 

  ngAfterContentInit(): void {

    this.propietarioService.listarPropietarios().subscribe(
      resp => {
        this.propietarios = resp;
      }
    );
  }

  consultarCitaPorId(): void{
    this.citaService.consultarPorId(this.idCita).subscribe(
      resp => {
        this.cita = resp;
      }
    );
  }

  registrar(): void{
    Swal.fire({
      title: '¿Desea guardar la información de la cita?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Guardar`,
      denyButtonText: `No guardar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.establecerComando();
        if(this.idCita === 0){
          this.insertar();
        }else {
           this.actualizar();
        }

      } else if (result.isDenied) {
        Swal.fire('Los cambios no fueron guardados', '', 'info');
      }
    });
  }

  establecerComando(): void{

    this.comandoCita = new ComandoCita();
    this.comandoCita.idCita = this.cita.idCita;
    this.comandoCita.idPropietario = this.cita.propietario.idPropietario;
    this.comandoCita.placaVehiculo = this.cita.vehiculo.placaVehiculo;
    this.comandoCita.descripcion = this.cita.descripcion;
    this.comandoCita.fecha = this.cita.fecha;
  }

  insertar(): void{
    this.citaService.insertar(this.comandoCita).subscribe(
      _ =>{

        Swal.fire('La infomación se guardó correctamente!', '', 'success');
        this.router.navigate(['/listar']);
      }
   );
  }

  actualizar(): void {
    this.citaService.actualizar(this.comandoCita).subscribe(
      _ => {

        Swal.fire('La infomación se actualizó correctamente!', '', 'success');
        this.router.navigate(['/listar']);
      }
   );
  }
}

