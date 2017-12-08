import { Injectable } from '@angular/core';

import { Character } from './combat/character/character-model';
import { mockCharacters } from './combat/character/mocks';

@Injectable()
export class CombatService {
  public characters: Character[];

  constructor() {
    this.characters = [ new Character(0) ];
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

  removeEffect(iChar: number, iEff: number, cb: any) {
    this.characters[iChar].effects.splice(iEff, 1);
    cb(this.characters[iChar].effects);
  }

  private nextCharacterId(): number {
    let highest = 0;
    for (let i = 0; i < this.characters.length; ++i) {
      highest = highest > this.characters[i].id ? highest : this.characters[i].id;
    }
    return highest + 1;
  }
}
