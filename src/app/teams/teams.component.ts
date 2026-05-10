import { Component, input, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teams',
  imports: [CommonModule],
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
