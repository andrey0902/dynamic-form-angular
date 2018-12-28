import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() type = 'success';
  @Output() destroy = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.destroy.emit('destroy  component');
  }

}
