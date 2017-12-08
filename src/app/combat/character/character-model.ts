
export class Effect {
  description = '';
  roundsLeft: number | void = null;
}

export class Team {
  name: string;
  color: string;
}

export const teams = [
  Object.assign(new Team(), { name: 'Blue', color: 'blue' }),
  Object.assign(new Team(), { name: 'Red', color: 'red' })
];

export class Character {
  id: number;
  name = '';
  ac = 0;
  hp = 0;
  initiative = 0;
  team: string;
  effects = [ new Effect() ];

  constructor(id?) {
    this.id = id;
  }
}
