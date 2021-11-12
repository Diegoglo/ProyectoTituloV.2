import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup, FormGroupDirective, Validators} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  formulario:FormGroup;
  public sexo = [
    { val:'masculino', isChecked: false },
    {val:'femenino', isChecked: false },
  ];

  onChange($event){
    if ($event.target.name)
    console.log($event.target);
  }
    
    


  constructor(private form:FormBuilder) { 
    this.formulario=this.form.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      // sexo: ['', Validators.required],
      contraseña: new FormControl('', [Validators.required])
    })
  }

  public registrarse(event: Event, reportForm: FormGroupDirective ){
    event.preventDefault();
  
    if (this.formulario.valid)
      this.submitReport();

    reportForm.resetForm(); // se resetea en esta parte, porque no se puede asignar como variable, porque la referencia no pasa al padre
  }

  
  public async submitReport(): Promise<void> {
    console.log(this.formulario.value)
    
    
  }

  // public async addReport(form: FormGroup): Promise<void> {
  //   try {
  //     const fileName = this.imageChangedEvent.target.files[0].name;
  //     const img = this.base64ToFile(this.croppedImage, fileName);
  //     this.checkoutForm.get('image').setValue(img);

  //     await this.reportProviderService.addReport(this.checkoutForm.value).toPromise();
  //     this.notificationService.success('El plan ha sido creado');
  //     this.checkoutForm.reset();
  //   } catch (error) {
  //     console.log(error);
  //     this.notificationService.error('No se ha podido crear el plan');
  //   }
  // }

  // public async updateReport(): Promise<void> {
  //   try {
  //     if (this.changePhoto) {
  //       const fileName = this.imageChangedEvent.target.files[0].name;
  //       const img = this.base64ToFile(this.croppedImage, fileName);
  //       this.checkoutForm.get('image').setValue(img);
  //     }
  //     await this.reportProviderService.updateReport(this.id, this.checkoutForm.value, this.changePhoto).toPromise();
  //     this.notificationService.success('El producto ha sido actualizado');
  //   } catch (error) {
  //     console.log(error);
  //     this.notificationService.error('No se ha podido actualizar el producto');
  //   }
  // }

  ngOnInit() {
    
  }

}
