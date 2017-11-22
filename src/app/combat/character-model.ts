
export class Character {
  id = 0;
  name = '';
  initiative = 0;
  order = 0;
  hp = 0;
  team = Teams.Party1;
  type: CharacterTypes.PC;
  effects: Effect[];
  hidden = false;
}

export class Effect {
  title = '';
  type = EffectTypes.Magical;
  desc = '';
}

export enum Teams {
  Monsters = 0,
  Party1,
  Party2,
}

export enum CharacterTypes {
  NPC = 0,
  PC
}

export enum EffectTypes {
  Magical = 0,
  Physical
}
