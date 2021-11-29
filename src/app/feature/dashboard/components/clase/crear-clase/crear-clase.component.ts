import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ClaseService } from '../shared/service/clase.service';

@Component({
  selector: 'app-crear-clase',
  templateUrl: './crear-clase.component.html',
  styleUrls: ['./crear-clase.component.css']
})
export class CrearClaseComponent implements OnInit {

  public  claseForm: FormGroup;

  constructor(protected service: ClaseService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.claseForm = this.fb.group({
      nombre: ['', Validators.required ]
    })
  }

  public crearClase() {
    console.log(this.claseForm.value);
    this.service.crear(this.claseForm.value).subscribe();
  }
}
