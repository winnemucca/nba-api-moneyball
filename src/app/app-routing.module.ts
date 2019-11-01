import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(mod => mod.RegisterModule)
  },
  { path: 'login', loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
