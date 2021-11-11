import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  formulario:FormGroup;



  constructor(private form:FormBuilder) { 
    this.formulario=this.form.group({

      nombre:['',Validators.required],
      apellido: ['', Validators.required],
      email:['',Validators.required],
      sexo: ['', Validators.required],
      contraseña:['',Validators.required]

  })
}

  ngOnInit() {
    
  }

  Registrarse(){
    
  }
}
