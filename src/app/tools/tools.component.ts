import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
  public show = new FormGroup({
    initiative: new FormControl(),
    status: new FormControl(),
    spells: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {

  }

  calcCardWidth(): number {
    let cardsActive = 0;
    cardsActive += this.show.value.initiative | 0;
    cardsActive += this.show.value.status | 0;
    cardsActive += this.show.value.spells | 0;

    let width = (4 - cardsActive) * 4;
    console.log(width);

    return width;
  }
}
