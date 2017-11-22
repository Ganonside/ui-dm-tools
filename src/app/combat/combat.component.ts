import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.scss']
})
export class CombatComponent implements OnInit {
  public started: boolean;;

  constructor() { }

  ngOnInit() {
    this.started = false;
  }

  startCombat(): void {
    this.started = true;
    console.log(this.started);
  }

}
