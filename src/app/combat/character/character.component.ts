import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { CombatService } from '../../combat.service';
import { Team, teams } from './character-model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  _id: number;
  teams = teams;
  characterForm: FormGroup;

  constructor(
    private combatService: CombatService,
    private fb: FormBuilder
  ) {
    this.characterForm = this.fb.group({
      id: null,
      name: '',
      ac: 0,
      hp: 0,
      initiative: 0,
      teamId: 0
    });

    this.handleFormChange();
  }

  ngOnInit() {
    this.characterForm.setValue(this.combatService.getCharacter(this._id));
  }

  ngOnChanges() {
    const changes = this.combatService.getCharacter(this._id);

    if (changes !== this.characterForm.value) {
      this.characterForm.patchValue(this.combatService.getCharacter(this._id));
    }
  }

  @Input()
  set id(id: number) {
    this._id = id;
  }

  addEffect() {

  }

  handleFormChange() {
    this.characterForm.valueChanges.forEach(data => {
      if (this.characterForm.dirty) {
        this.combatService.updateCharacter(data);
      }
    });
  }
}
