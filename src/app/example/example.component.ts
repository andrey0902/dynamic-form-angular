import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../dialog/dialog-config';
import { DialogRef } from '../dialog/dialog-ref';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  constructor(public config: DialogConfig,
              public dialog: DialogRef) { }

  ngOnInit() {
  }

  onClose() {
    this.dialog.close('some value');
  }

}
