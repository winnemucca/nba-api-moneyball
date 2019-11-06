import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared-routing-module';

import { TypeaheadModule } from 'ngx-bootstrap';
import { NbaPlayersRoutingModule } from './nba-players-routing.module';
import { NbaPlayersComponent } from './nba-players.component';


@NgModule({
  declarations: [NbaPlayersComponent],
  imports: [
    SharedModule,
    NbaPlayersRoutingModule,
    TypeaheadModule.forRoot()
  ],
  exports: [
    TypeaheadModule
  ]
})
export class NbaPlayersModule { }
