import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbaPlayersRoutingModule } from './nba-players-routing.module';
import { NbaPlayersComponent } from './nba-players.component';


@NgModule({
  declarations: [NbaPlayersComponent],
  imports: [
    CommonModule,
    NbaPlayersRoutingModule
  ]
})
export class NbaPlayersModule { }
