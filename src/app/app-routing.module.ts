// modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// declarations
import { WelcomeComponent } from './welcome/welcome.component';
import { AppComponent } from './app.component';
import { TabsModule } from 'ngx-bootstrap';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  // {
  //   path: 'register',
  //   loadChildren: () => import('./register/register.module').then(mod => mod.RegisterModule)
  // },
  // {
  //   path: 'login', loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule)
  // },
  {
    path: 'welcome',
    component: WelcomeComponent,
    data: {
      title: 'Welcome'
    },
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  { path: 'nbaPlayers', loadChildren: () => import('./nba-players/nba-players.module').then(m => m.NbaPlayersModule) }

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
