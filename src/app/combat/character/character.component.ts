import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { CombatService } from '../../combat.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  _id: number;
  characterForm: FormGroup;

  constructor(
    private combatService: CombatService,
    private fb: FormBuilder
  ) {
    this.characterForm = this.fb.group({
      id: null,
      name: ''
    });

    this.handleFormChange();
  }

  ngOnInit() {
    this.characterForm.patchValue(this.combatService.getCharacter(this._id));
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

  handleFormChange() {
    this.characterForm.valueChanges.forEach(data => {
      if (this.characterForm.dirty) {
        this.combatService.updateCharacter(data);
      }
    });
  }
}