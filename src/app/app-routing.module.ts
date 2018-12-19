import { LoginComponentComponent } from './login-component/login-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetCycleComponentComponent } from './set-cycle-component/set-cycle-component.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponentComponent
  },
  {
    path: 'setCycle',
    component: SetCycleComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
