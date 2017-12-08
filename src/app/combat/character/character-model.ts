
export class Team {
  id: number;
  name: string;
  color: string;

  constructor(id, name, color) {
    this.id = id;
    this.name = name;
    this.color = color;
  }
}

export const teams = [
  new Team(0, 'Blue', 'blue'),
  new Team(1, 'Red', 'red')
];

export class Character {
  id: number;
  name = '';
  ac = 0;
  hp = 0;
  initiative = 0;
  teamId: Team;

  constructor(id = 0) {
    this.id = id;
  }
}

const c1: Character = Object.assign(new Character(), {
  id: 0,
  name: 'bob',
  ac: 17,
  hp: 56,
  initiative: 0,
  teamId: 0,
});

const c2: Character = Object.assign(new Character(), {
  id: 1,
  name: 'billy',
  ac: 16,
  hp: 60,
  initiative: 0,
  teamId: 0,
});

const e1: Character = Object.assign(new Character(), {
  id: 2,
  name: 'Red Dragon',
  ac: 21,
  hp: 135,
  initiative: 0,
  teamId: 1,
});

export const mockCharacters = [ c1, c2, e1 ]
