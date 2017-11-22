import { Validators } from '@angular/forms';

export const Teams = {
  Monsters: 0,
  Party1: 1,
  Party2: 2,
};

export const CharacterTypes = {
  NPC: 0,
  PC: 1
};

export const EffectTypes = {
  Magical: 0,
  Physical: 1
};

export class Character {
  id: number;
  name = ['', Validators.required];
  initiative = [0, Validators.pattern(/-?\d+/)];
  order = 0;
  health = [0, Validators.pattern(/-?\d+/)];
  team = [Teams.Party1, Validators.required];
  type = [CharacterTypes.PC, Validators.required];
  effects: Effect[];
  hidden = false;

  constructor(id = 0) {
    this.id = id;
  }
}

export class Effect {
  title = '';
  type = EffectTypes.Magical;
  desc = '';
}
