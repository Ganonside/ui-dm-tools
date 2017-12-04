import { Injectable } from '@angular/core';

import { Character, mockCharacters } from './combat/character-model';

@Injectable()
export class CombatService {
  public characters: Character[];

  constructor() {
    // this.characters = [ new Character() ];
    this.characters = mockCharacters;
  }

  addCharacter(): void {
    console.log(arguments);

    const nextId = this.nextCharacterId();
    this.characters.push(new Character(nextId));
  }

  private nextCharacterId(): number {
    let highest = 0;
    for (let i = 0; i < this.characters.length; ++i) {
      highest = highest > this.characters[i].id ? highest : this.characters[i].id;
    }
    return highest + 1;
  }
}
