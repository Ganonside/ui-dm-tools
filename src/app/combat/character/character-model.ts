
export class Effect {
  description = '';
  roundsLeft: number | void = null;
}

export class Team {
  id: number;
  name: string;
  color: string;
}

export const teams = [
  Object.assign(new Team(), { id: 0, name: 'Blue', color: 'blue' }),
  Object.assign(new Team(), { id: 1, name: 'Red', color: 'red' })
];

export class Character {
  id: number;
  name = '';
  ac = 0;
  hp = 0;
  initiative = 0;
  teamId: Team;
  effects = [ new Effect() ];

  constructor(id?) {
    this.id = id;
  }
}
