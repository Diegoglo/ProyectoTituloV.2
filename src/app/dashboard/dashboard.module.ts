import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardPage } from './dashboard';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';



import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent} from './components/auth/register/register.component';
import { OverviewComponent } from './components/overview/overview.component';
import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { RegistroAuxiliarComponent} from './components/auxiliar/registro-auxiliar/registro-auxiliar.component';
import { AuxilianteComponent} from './components/auxiliar/auxiliante/auxiliante.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardPage,
    LoginComponent,
    RegisterComponent,
    OverviewComponent,
    RegistroAuxiliarComponent,
    AuxilianteComponent
  ]
})
export class DashboardPageModule {}
