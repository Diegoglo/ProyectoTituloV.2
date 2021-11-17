import { Component, OnInit } from '@angular/core';
import {  
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  ValidationErrors,
  ValidatorFn,
  Validators 
} from '@angular/forms';

import {UserProviderService} from '../../../../core/providers/user/user-provider.service';
import { Auth} from '../../../../core/model/auth.model';
import { AuthService} from '../../../../core/services/auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public checkoutForm: FormGroup;
  users: Auth[];


  constructor(
    private form: FormBuilder,
    private userProvider: UserProviderService,
    private authService: AuthService,
  ) {
    this.checkoutForm = this.form.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)],),
    }
  )}


  async ngOnInit(): Promise<void> {
  }

  public async login(checkoutForm: FormGroupDirective): Promise<void> {
    if (this.checkoutForm.valid) {
      try {
        await this.authService.login(this.checkoutForm.value).toPromise();
      } catch (error) {
        console.log('Los datos ingresados son incorrectos')
      }
    }
  }
}
