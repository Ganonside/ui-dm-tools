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
    this.characterForm.setValue(this.combatService.getCharacter(this._id));
  }

  ngOnChanges() {
    this.characterForm.setValue(this.combatService.getCharacter(this._id));
  }

  @Input()
  set id(id: number) {
    this._id = id;
  }

  handleFormChange() {
    this.characterForm.valueChanges.subscribe(data => {
      this.combatService.updateCharacter(data);
    });
  }
}
