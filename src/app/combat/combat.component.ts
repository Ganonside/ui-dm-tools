import { Component, OnInit } from '@angular/core';

import { CombatService } from '../combat.service';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.scss']
})
export class CombatComponent implements OnInit {

  constructor(
    public combatService: CombatService
  ) { }

  ngOnInit() {
  }

  addCharacter(): void {
    this.combatService.addCharacter();
  }

  startCombat(): void {

  }

  reset(): void {
    this.combatService.characters = [];
  }
}
