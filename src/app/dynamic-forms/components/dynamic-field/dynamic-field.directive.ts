import {
  ComponentFactory, ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, ViewContainerRef
} from '@angular/core';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';
import { SelectComponent } from '../select/select.component';
import { DateComponent } from '../date/date.component';
import { RadiobuttonComponent } from '../radiobutton/radiobutton.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { FieldConfig } from '../../field.interface';
import { FormGroup } from '@angular/forms';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { InputArrayComponent } from '../input-array/input-array.component';

const componentMapper = {
  input: InputComponent,
  button: ButtonComponent,
  select: SelectComponent,
  date: DateComponent,
  radiobutton: RadiobuttonComponent,
  checkbox: CheckboxComponent,
  formGroup: DynamicFormComponent,
  array: InputArrayComponent,
};

@Directive({
  // tslint:disable-next-line
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input() field: FieldConfig;
  @Input() group: FormGroup;
  componentRef: any;
  constructor(private resolver: ComponentFactoryResolver,
              private container: ViewContainerRef) { }

  ngOnInit() {
    if (this.noExistChildren()) {
      return this.createComponentFactory();
    }
    this.createDynamicFormComponent();
  }

  createComponentFactory() {
    const factory = this.resolver.resolveComponentFactory(componentMapper[this.field.type]);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }

  createDynamicFormComponent() {
    const factory = this.resolver.resolveComponentFactory(componentMapper.formGroup);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.fields = this.field.children;
    this.componentRef.instance.group = this.group.get(this.field.name);
  }

  noExistChildren() {
    return !this.field.children;
  }

}
