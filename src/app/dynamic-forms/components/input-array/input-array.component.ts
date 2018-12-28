import { Component, OnInit } from '@angular/core';
import { FieldConfig } from '../../field.interface';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicFormService } from '../../services/dynamic-form.service';

@Component({
  selector: 'app-input-array',
  templateUrl: './input-array.component.html',
  styleUrls: ['./input-array.component.scss']
})
export class InputArrayComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor(private fb: FormBuilder,
              private dynamicFormService: DynamicFormService) { }

  ngOnInit() {
    this.addControl();
  }

  get control () {
    return (this.group.get(this.field.name) as FormArray);
  }

  deleteItem(i) {
    this.control.removeAt(i);
  }

  addControl() {
    this.control.push(this.dynamicFormService.createGroup(this.fb, this.field.fields));
  }


}
