import { Component, input, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-teams',
  imports: [CommonModule,MatCardModule],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent implements OnInit {

  @Input() team: string[] = []
  
  @Input() index = 0;


  constructor(){

  }

  ngOnInit(): void {
      
  }

}
