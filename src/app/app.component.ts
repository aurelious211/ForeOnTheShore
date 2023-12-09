import { Component } from '@angular/core';
import leaderBoardData from "./Files/leaderBoardData.json"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FOTS';
  leaderboardList:{
      id:number,
      playerName:string,
      team:string,
      points:number,
      pointsBack:number,
      skins:number,
      scoringAverage:number,
      playoffTarget:number,
      roundsPlayed:number,
      dots:number
  }[]=leaderBoardData;

  addPlayerData(): void {
    
  }
}
