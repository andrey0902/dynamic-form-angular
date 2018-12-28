import { Component, ContentChild, OnInit } from '@angular/core';
import { MatInput, MatSelect } from '@angular/material';


@Component({
  // tslint:disable-next-line
  selector: 'input-wrap',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @ContentChild(MatInput) public control: MatInput;
  @ContentChild(MatSelect) public controlSelect: MatSelect;
  constructor() { }

  ngOnInit() {
  }
}
