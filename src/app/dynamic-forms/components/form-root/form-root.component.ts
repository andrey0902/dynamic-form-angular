import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FieldConfig } from '../../field.interface';
import { DynamicFormService } from '../../services/dynamic-form.service';

@Component({
  selector: 'app-form-root',
  templateUrl: './form-root.component.html',
  styleUrls: ['./form-root.component.scss']
})
export class FormRootComponent implements OnInit {
  @Input() fields: FieldConfig[] = [];
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  public form: FormGroup;
  constructor(private fb: FormBuilder,
              private dynamicFormService: DynamicFormService) { }


  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.dynamicFormService.createControl(this.fb, this.fields);
  }


  get invalid() {
    return this.form.invalid;
  }

  get valid() {
    return this.form.valid;
  }

  get value() {
    return this.form.value;
  }

  onSubmit(e: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    } else {
      // this.validateAllFormFields(this.form);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

}
