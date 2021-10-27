import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/model/cita';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CitaService } from 'src/app/servicios/cita/cita.service';

@Component({
  selector: 'app-listar-citas',
  templateUrl: './listar-citas.component.html',
  styleUrls: ['./listar-citas.component.css']
})
export class ListarComponent implements OnInit {

  citas: Cita[] = []

  constructor(private citaService: CitaService, public router: Router){}

  ngOnInit(): void {
    this.citaService.listarCitas().subscribe(
      resp => {
        this.citas = resp;
      }
    );
  }

  eliminar(cita: Cita): void{

    Swal.fire({
      title: '¿Desea eliminar el registro?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: 'No eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.citaService.eliminar(cita.idCita).subscribe(
          _=> {
            this.citas = this.citas.filter(c => c !== cita);
          }
        );
      } else if (result.isDenied) {
        Swal.fire('El registro no fue eliminado', '', 'info');
      }
    });
  }

  editarCita(cita: Cita): void{
    this.router.navigate([`/editar/${cita.idCita}`]);
  }
}