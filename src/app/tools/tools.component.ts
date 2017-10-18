import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
  public showInitiative = true;
  public showStatus = true;
  public showSpells = false;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleInitiative(): void {
    this.showInitiative = !this.showInitiative;
  }

  public toggleStatus(): void {
    this.showStatus = !this.showStatus;
  }

  public toggleSpells(): void {
    this.showSpells = !this.showSpells;
  }
}
