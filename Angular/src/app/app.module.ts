import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatSortModule } from '@angular/material/sort';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'players/:pos', component: PlayersComponent},
  {path: 'players', redirectTo: '/players/ALL', pathMatch: 'full'},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatSortModule,
    HttpClientModule,
    ActivatedRoute,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
