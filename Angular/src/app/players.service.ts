import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { genPlayer } from './models/genPlayer.component';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playerURL = 'api/players';
  private QBURL = 'api/players/QB';
  private RBURL = 'api/players/RB';
  private WRURL = 'api/players/WR';
  private TEURL = 'api/players/TE';
  private DEFURL = 'api/players/DEF';

  constructor(private httpClient: HttpClient) { }

  getPlayers(): Observable<genPlayer[]> {
    return this.httpClient.get<genPlayer[]>(this.playerURL);
  }

  getQBs(): Observable<genPlayer[]> {
    return this.httpClient.get<genPlayer[]>(this.QBURL);
  }

  getRBs(): Observable<genPlayer[]> {
    return this.httpClient.get<genPlayer[]>(this.RBURL);
  }

  getWRs(): Observable<genPlayer[]> {
    return this.httpClient.get<genPlayer[]>(this.WRURL);
  }

  getTEs(): Observable<genPlayer[]> {
    return this.httpClient.get<genPlayer[]>(this.TEURL);
  }

  getDEF(): Observable<genPlayer[]> {
    return this.httpClient.get<genPlayer[]>(this.DEFURL);
  }
}
