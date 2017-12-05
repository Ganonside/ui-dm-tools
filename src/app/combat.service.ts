import { Injectable } from '@angular/core';

import { Character, mockCharacters } from './combat/character/character-model';

@Injectable()
export class CombatService {
  public characters: Character[];

  constructor() {
    this.characters = [ new Character() ];
    this.characters = mockCharacters;
  }

  addCharacter(): void {
    const nextId = this.nextCharacterId();
    this.characters.push(new Character(nextId));
  }

  getCharacter(id: number): Character {
    return this.characters.find(c => c.id === id);
  }

  updateCharacter(data: Character): void {
    let iCharacter = this.characters.findIndex(c => c.id === data.id);

    // Need to use Object.assign otherwise it will destroy the previous object, causing issues
    this.characters[iCharacter] = Object.assign(this.characters[iCharacter], data);
  }

  private nextCharacterId(): number {
    let highest = 0;
    for (let i = 0; i < this.characters.length; ++i) {
      highest = highest > this.characters[i].id ? highest : this.characters[i].id;
    }
    return highest + 1;
  }
}
