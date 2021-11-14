import { Component, OnInit } from '@angular/core';
import {  AbstractControl,
          FormBuilder,
          FormControl,
          FormGroup,
          FormGroupDirective,
          ValidationErrors,
          ValidatorFn,
          Validators } from '@angular/forms';
import { UserProviderService } from '../../../../core/providers/user/user-provider.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  formulario: FormGroup;
  sexo: FormGroup;

  constructor(
      private form: FormBuilder,
      private userService: UserProviderService
      ) {
      this.sexo = this.form.group({
        masculino: new FormControl(false),
        femenino: new FormControl(false)
      },
      {
        validators: this.checkSexs
      });

      this.formulario = this.form.group({
        nombre: new FormControl('', [Validators.required]),
        apellido: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        sexo: this.sexo,
        contraseña: new FormControl('', [Validators.required, Validators.minLength(6)],),
        confirmarContraseña: new FormControl('', [Validators.required])
      },
      {
        validators: this.checkPasswords
      });
  }

  onChange(){

  }

  public registrarse(event: Event, reportForm: FormGroupDirective ){
    event.preventDefault();
    if (this.formulario.valid) {
      this.submitReport();
    }

    reportForm.resetForm(); // se resetea en esta parte, porque no se puede asignar como variable, porque la referencia no pasa al padre
  }

  public async submitReport(): Promise<void> {
    // if(this.sexo.value.masculino){
    //   this.formulario.controls.sexo.setValue(1);
    // }else{
    //   this.formulario.controls.sexo.setValue(0);
    // }
    this.userService.addUser(this.formulario.value);
  }


  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    const pass = group.get('contraseña').value;
    const confirmPass = group.get('confirmarContraseña').value;
    return pass === confirmPass ? null : {
       notSame: true
    };
  };

  checkSexs: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    const m = group.get('masculino').value;
    const f = group.get('femenino').value;
    if(!m && !f){
      return {
        twoChecked: true
      };
    }else{
      return null;
    }
  };

  ngOnInit() {

  }

}
