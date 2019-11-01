// modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// declarations
import { WelcomeComponent } from './welcome/welcome.component';
import { AppComponent } from './app.component';
import { TabsModule } from 'ngx-bootstrap';


const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(mod => mod.RegisterModule)
  },
  {
    path: 'login', loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    data: {
      title: 'Welcome'
    }
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TabsModule.forRoot()

  ],
  declarations: [
    WelcomeComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
