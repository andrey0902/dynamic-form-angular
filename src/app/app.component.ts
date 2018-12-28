import {
  AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnDestroy, ViewChild,
  ViewContainerRef
} from '@angular/core';

import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { RegConfig } from './data-config';
import { AlertComponent } from './alert/alert.component';
import { DialogService } from './dialog/dialog.service';
import { ExampleComponent } from './example/example.component';
import { FormRootComponent } from './dynamic-forms/components/form-root/form-root.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, AfterViewInit {
  // get instance form for setting property button valid or not
  @ViewChild(FormRootComponent) form: FormRootComponent;
  @ViewChild('alertContainer', { read: ViewContainerRef }) container;
  formArray;
  questions: any[];
  public regConfig = RegConfig;
  private componentRef: any;

  constructor(
              private resolver: ComponentFactoryResolver,
              private dialogService: DialogService,
              private fb: FormBuilder) {
    console.log('this.questions', this.questions);

    this.formArray = this.fb.group({
      phones: this.fb.array([this.createItem()])
  });
  }

  createItem(): FormGroup {
    return this.fb.group({
      phone: '',
    });
  }

  addItem() {
    const array = (this.formArray.get('phones') as FormArray);
      array.push(this.createItem());
  }

  deleteItem(i) {
    const array = (this.formArray.get('phones') as FormArray);
    array.removeAt(i);
  }

  submit(e) {
    console.log('data', e);
  }

  createComponent(type) {
    this.container.clear();

    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(AlertComponent);

    this.componentRef = this.container.createComponent(factory);

    this.componentRef.instance.type = type;
    this.componentRef.instance.destroy.subscribe(event => console.log('subscribe', event));
  }

  clear() {
    this.container.clear();
  }

  ngAfterViewInit() {
    console.log('log form app', this.form);
  }
  ngOnDestroy() {
    this.componentRef.destroy();
  }

  openDialog() {
    const ref = this.dialogService.open(ExampleComponent, { data: { message: 'I am a dynamic component inside of a dialog!' } });

    ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result);
    });
  }

  closedDialog() {
    this.dialogService.closed();
  }
}
