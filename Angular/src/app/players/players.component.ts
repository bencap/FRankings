import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PlayerService } from '../players.service';
import { genPlayer } from '../models/genPlayer.component';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'position', 'avgPts', 'fGrade', 'oGrade'];
  dataSource: MatTableDataSource<genPlayer>;
  selection?: string;  

  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: ActivatedRoute, private playersService: PlayerService) {
    this.dataSource = new MatTableDataSource<genPlayer>();
    this.sort = new MatSort;
  }

  ngOnInit(): void {
    this.selection = this.getPosition();
    this.getPlayers(this.getPosition());  
  }

  ngAfterViewInit(): void{
    // sort  must be added after view init for table to be sortable
    this.dataSource.sort = this.sort;
  }

  getPosition(): string {
    var position = this.route.snapshot.paramMap.get('pos')?.toUpperCase();
    position = (position === undefined) ? "ALL" : position;

    return position
  }

  getPlayers(position: string): void{
    this.selection = position;

    if (this.selection == "ALL"){
      this.playersService.getPlayers().subscribe(players => (this.dataSource.data = players));
      this.displayedColumns = ['name', 'position', 'team', 'avgPts', 'fGrade', 'oGrade'];
    }
    else if (this.selection == "QB"){
      this.playersService.getQBs().subscribe(players => (this.dataSource.data = players));
      this.displayedColumns = ['name', 'position', 'team', 'avgPts', 'passTDs', 'rushTDs', 
                               'passYDs', 'rushYDs', 'interceptions', 'fumbles', 'athleticism', 
                               'agility', 'strength', 'speed', 'productivity', 'armStrength', 
                               'accuracy', 'decisionMaking', 'dualThreat', 'bigPlay', 'fGrade', 'oGrade'];
    }
    else if (this.selection == "RB"){
      this.playersService.getRBs().subscribe(players => (this.dataSource.data = players));
      this.displayedColumns = ['name', 'position', 'team', 'avgPts', 'totalTDs', 'totalYDs', 
                               'carries', 'receptions', 'fumbles', 'athleticism', 'vision',
                               'agility', 'strength', 'speed', 'productivity', 'breakTackle', 
                               'ballSecurity', 'catching', 'dualThreat', 'bigPlay', 'fGrade', 'oGrade'];
    }
    else if (this.selection == "WR"){
      this.playersService.getWRs().subscribe(players => (this.dataSource.data = players));
      this.displayedColumns = ['name', 'position', 'team', 'avgPts', 'totalTDs', 'totalYDs', 
                               'receptions', 'fumbles', 'athleticism',
                               'agility', 'strength', 'speed', 'productivity', 'routeRunning', 
                               'runAfterCatch', 'catching', 'deepThreat', 'bigPlay', 'fGrade', 'oGrade'];
    }
    else if (this.selection == "TE"){
      this.playersService.getTEs().subscribe(players => (this.dataSource.data = players));
      this.displayedColumns = ['name', 'position', 'team', 'avgPts', 'totalTDs', 'totalYDs', 
                               'receptions', 'fumbles', 'athleticism',
                               'agility', 'strength', 'speed', 'productivity', 'routeRunning', 
                               'runAfterCatch', 'catching', 'deepThreat', 'bigPlay', 'fGrade', 'oGrade'];
    }
    else if (this.selection == "DEF"){
      this.playersService.getDEF().subscribe(players => (this.dataSource.data = players));
      this.displayedColumns = ['name', 'position', 'avgPts', 'fto', 'pointsAllowedGame', 
                               'yardsAllowedGame', 'specialTeamsTDs', 'fGrade', 'oGrade'];
    }
  }
}