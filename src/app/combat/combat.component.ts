import { Component, OnInit } from '@angular/core';

import { CombatService } from '../combat.service';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.scss']
})
export class CombatComponent implements OnInit {
  iActiveCharacter: number;
  activeCharacterId: number;
  started = false;

  constructor(
    public combatService: CombatService
  ) { }

  ngOnInit() {
  }

  addCharacter(): void {
    this.combatService.addCharacter();
  }

  startCombat(): void {
    if (!this.started) {
      this.iActiveCharacter = 0;
      this.getActiveCharacterId();
      this.started = true;
    }
  }

  next(): void {
    if (this.started && this.combatService.characters.length <= this.iActiveCharacter + 1) {
      this.nextRound();
    } else {
      this.iActiveCharacter = this.iActiveCharacter + 1;
      this.getActiveCharacterId();
    }
  }

  nextRound(): void {
    this.iActiveCharacter = 0;
    this.getActiveCharacterId();
  }

  reset(): void {
    this.combatService.characters = [];
  }

  private getActiveCharacterId(): void {
    this.activeCharacterId = this.combatService.characters[this.iActiveCharacter].id;
  }
}
