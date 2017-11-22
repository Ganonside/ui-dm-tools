
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
  id = 0;
  name = '';
  initiative = 0;
  order = 0;
  health = 0;
  team = Teams.Party1;
  type = CharacterTypes.PC;
  effects: Effect[];
  hidden = false;
}

export class Effect {
  title = '';
  type = EffectTypes.Magical;
  desc = '';
}
