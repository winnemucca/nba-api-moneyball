import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NbaPlayersComponent } from './nba-players.component';

const routes: Routes = [{ path: '', component: NbaPlayersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NbaPlayersRoutingModule { }
