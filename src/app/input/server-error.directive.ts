import {
  AfterViewInit, ChangeDetectorRef, Directive, HostBinding, Injector, Input, OnDestroy, Optional, ViewContainerRef
} from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';
import { get, has } from 'lodash';
import { Subject } from 'rxjs/index';
import { InputComponent } from './input/input.component';
import { takeUntil } from 'rxjs/internal/operators';
import { MatInput, MatSelect } from '@angular/material';
//tslint:disable

@Directive({
  selector: 'app-server-error'
})
export class ServerErrorDirective implements AfterViewInit, OnDestroy {
  @Input() public key: string[];
  @HostBinding('hidden') public hidden: boolean = true;

  @Input() set error(errors) {

    if(errors && has(errors, this.key.join('.'))) {
      this.errorMessage = get(errors, this.key.join('.'));

      this.setContent(this.errorMessage);

      if (this.control instanceof FormControl) {
        this.control.setErrors({serverError: this.errorMessage});
      }
      this.hidden = false;
      return;
    }

    this.hideError();

  }
  private control: MatInput | MatSelect;
  private errorMessage: string;
  private until = new Subject();
  constructor(@Optional() private container: InputComponent,
              @Optional() public form: FormGroupDirective,
              private injector: Injector,
              private viewContainer: ViewContainerRef,
              private cd: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.control =  this.container
      ? this.container.control || this.container.controlSelect
      : null;
    if (this.control) {
      this.control.stateChanges
        .pipe(
          takeUntil(this.until),
        )
        .subscribe(() => {
          this.hideError();
          this.cd.markForCheck();
        });
    }
  }

  ngOnDestroy(): void {
    this.until.next();
    this.until.unsubscribe();
  }

  setContent(value) {
    this.viewContainer.element.nativeElement.innerHTML = value;
  }

  hideError() {
    this.hidden = true;
    this.setContent('');
  }
}
