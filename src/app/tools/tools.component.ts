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
  public cardWidth: string;

  constructor() { }

  ngOnInit(): void {
    this.show.valueChanges.subscribe(form => {
      this.calcCardWidth();
    });
  }

  calcCardWidth(): void {
    let cardsActive = 0;
    cardsActive += this.show.value.initiative ? 1 : 0;
    cardsActive += this.show.value.status ? 1 : 0;
    cardsActive += this.show.value.spells ? 1 : 0;

    const width = 12 / cardsActive;
    console.log(width);

    this.cardWidth = `col-${width}`;
    console.log(this.cardWidth);
  }
}
