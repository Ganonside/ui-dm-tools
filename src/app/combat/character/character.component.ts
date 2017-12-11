import { Component, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { CombatService } from '../../combat.service';
import { Character, Effect, Team, teams } from './character-model';
// import { teams } from './mocks';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnChanges {
  _active: boolean;
  teams = teams;
  characterForm: FormGroup;
  teamColor: string;

  @Input() character: Character;
  @Input()
  set active(active: boolean) {
    if (this._active && !active) {
      this.combatService.updateEffects(this.character.id, this.setEffects.bind(this));
    }

    this._active = active;
  }

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
      team: 'blue',
      effects: this.fb.array([])
    });

    this.handleFormChange();
  }

  ngOnChanges() {
    const changes = this.combatService.getCharacter(this.character.id);
    this.characterForm.patchValue(changes);
    this.setEffects(changes.effects);
    this.teamColor = `team-${this.characterForm.get('team').value}`;
  }

  setEffects(effects: Effect[]) {
    const effectFGs = effects.map(effect => this.fb.group(effect));
    const effectFormArray = this.fb.array(effectFGs);
    this.characterForm.setControl('effects', effectFormArray);
  }

  get effects(): FormArray {
    return this.characterForm.get('effects') as FormArray;
  }

  addEffect() {
    this.effects.push(this.fb.group(new Effect()));
  }

  removeEffect(index: number) {
    this.combatService.removeEffect(this.character.id, index, this.setEffects.bind(this));
  }

  handleFormChange() {
    this.characterForm.valueChanges.subscribe(character => {
      if (this.characterForm.dirty) {
        this.combatService.updateCharacter(character);
        this.teamColor = `team-${this.characterForm.get('team').value}`;
      }
    });
  }
}
