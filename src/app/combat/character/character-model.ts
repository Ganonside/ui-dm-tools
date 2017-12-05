

export class Character {
  id: number;
  name = '';

  constructor(id = 0) {
    this.id = id;
  }
}

const c1 = new Character();
c1.name = "bob";

const c2 = new Character(1);
c2.name = "billy";

export const mockCharacters = [ c1, c2 ]
