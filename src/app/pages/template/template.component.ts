import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: '',
    apellido: '',
    correo: ''
  };

  listaPaises = [];

  constructor(private paisService: PaisService) { }

  ngOnInit() {
    this.paisService.getPaises()
    .subscribe(
      paises => {
        console.log(paises);
      }
    );
  }

  guardar(forma: NgForm ) {


    console.log('submit fired');

    if ( forma.invalid ) {
      Object.values( forma.controls).forEach( 
        control => {
          // console.log(control);
          control.markAsTouched();
        }
      );

      return;
    }

    console.log(forma);
  }

}
