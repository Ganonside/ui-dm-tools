import { Character, Effect, Team } from './character-model';

const c1: Character = Object.assign(new Character(), {
  id: 0,
  name: 'bob',
  ac: 17,
  hp: 56,
  initiative: 0,
  team: 'blue',
});

const c2: Character = Object.assign(new Character(), {
  id: 1,
  name: 'billy',
  ac: 16,
  hp: 60,
  initiative: 0,
  team: 'blue',
});

const e1: Character = Object.assign(new Character(), {
  id: 2,
  name: 'Red Dragon',
  ac: 21,
  hp: 135,
  initiative: 0,
  team: 'red',
});

export const mockCharacters = [ c1, c2, e1 ]
