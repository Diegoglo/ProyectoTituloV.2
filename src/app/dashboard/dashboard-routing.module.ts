import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './dashboard';
import { LoginComponent} from './components/auth/login/login.component'
import { RegisterComponent} from './components/auth/register/register.component'
import { AuxilianteComponent} from './components/auxiliar/auxiliante/auxiliante.component'
import { RegistroAuxiliarComponent} from './components/auxiliar/registro-auxiliar/registro-auxiliar.component'

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path:'register',
        component: RegisterComponent
      },
      {
        path:'auxiliante',
        component: AuxilianteComponent
      },
      {
        path:'registerAuxiliar',
        component: RegistroAuxiliarComponent
      }
    ]
  },
  {
    path:'',
    component:DashboardPage
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPageRoutingModule {}
