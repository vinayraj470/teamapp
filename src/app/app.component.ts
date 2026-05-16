import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams/teams.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    TeamsComponent,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  newMemberName: string = '';
  members: string[] = [];
  errorMessage: string = '';
  numberOfTeams: number | '' = '';
  teams: string[][] = [];
  showGeneratedTeams = false;

  // add member input function
  onInput(member: string) {
    this.newMemberName = member;
    // console.log(this.newMemberName);
  }

  // add membersfunction
  addmember() {
    // console.log("CLICKED add")

    if (!this.newMemberName) {
      this.errorMessage = "Name can't be empty";
      return;
    }

    // Split names by comma
    const newMembers = this.newMemberName
      .split(',')
      .map((name) => name.trim())
      .filter((name) => name);

    this.errorMessage = '';
    // Add all names into members array
    this.members.push(...newMembers);

    this.newMemberName = '';
    // console.log(this.members);
  }

  //number of team input function
  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
  }

  //Generate team  function
  generateTeams() {
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMessage = 'Invalid number of teams';
      return;
    }

    if (this.members.length < this.numberOfTeams) {
      this.errorMessage = 'Not enough members';
      return;
    }

    // Clear previous teams
    this.teams = [];

    this.errorMessage = '';

    const allMembers = [...this.members];

    while (allMembers.length > 0) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        if (allMembers.length === 0) {
          break;
        }

        const randomIndex = Math.floor(Math.random() * allMembers.length);

        const member = allMembers.splice(randomIndex, 1)[0];

        if (!this.teams[i]) {
          this.teams[i] = [];
        }

        this.teams[i].push(member);
      }
    }

    // Show teams screen only after successful generation
    this.showGeneratedTeams = true;

    this.members = [];
    this.numberOfTeams = '';
  }

  resetApplication() {
    this.members = [];
    this.teams = [];
    this.newMemberName = '';
    this.errorMessage = '';
    this.numberOfTeams = 0;
  }

  removeMember(index: number) {
    this.members.splice(index, 1);
  }

  clearAllMembers() {
    this.members = [];
    this.errorMessage = '';
  }

  backToGenerator() {
    this.showGeneratedTeams = false;
  }
}


//logo 
//download team
//Shuffling
//Captain cool feature icons
//placeholders for the members entry and that members section placeholders
//Start over should be removed