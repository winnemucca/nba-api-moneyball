import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NbaApiService } from '../shared/nba-api.service';
import { debounceTime, distinctUntilChanged, tap, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-nba-players',
  templateUrl: './nba-players.component.html',
  styleUrls: ['./nba-players.component.scss']
})
export class NbaPlayersComponent implements OnInit {

  playerSearch: FormGroup;
  players = [];
  constructor(
    private nbaApi: NbaApiService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
    this.playerSearchObserve();
  }

  playerSearchObserve(): void {
    this.playerSearch.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      mergeMap(term => this.nbaApi.getPlayerByLastName(term)),
      tap(x => console.log(x))
    ).subscribe(data => data);
  }

  private createForm(): void {
    this.playerSearch = this.fb.group({
      searchTerm: ''
    });
  }

}
