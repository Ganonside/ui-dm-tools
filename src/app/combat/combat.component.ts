import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Character, CharacterTypes, Effect, EffectTypes, Teams } from './character-model'

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.scss']
})
export class CombatComponent implements OnInit {
  public started: boolean;
  public editing: boolean;
  public turn: number;

  characterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.started = true;
    this.editing = true;
  }

  createForm() {
    this.characterForm = this.fb.group({
      name: ['', Validators.required],
      hp: 0,
      initiative: [0, Validators.required],
      team: [Teams.Party1, Validators.required],
      type: [CharacterTypes.PC, Validators.required],
      effects: [],
      hidden: [false, Validators.required],
    });
  }

  startCombat(): void {
    this.started = true;
    this.turn = 0;

    this.editCombat();
  }

  editCombat(): void {
    this.editing = true;
  }

}
