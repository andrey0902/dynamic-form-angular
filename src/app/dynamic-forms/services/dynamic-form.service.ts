import { Injectable } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Injectable()
export class DynamicFormService {

  constructor() { }

  createControl(fb, fields): FormGroup {
    const group = fb.group({});
    fields.forEach(field => {
      if (field.type === 'button') { return; }
      if (field.type === 'formGroup') {
        group.addControl(field.name, this.createControl(fb, field.children));
      }
      if (field.type === 'array') {
        group.addControl(field.name,  fb.array([]));
      }
      const control = fb.control(
        field.value,
         this.bindValidations(field.validations || [])
      );
      group.addControl(field.name, control);
    });
    return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  createGroup(fb, fields): FormGroup {
    const group = fb.group({});
    fields.forEach(field => {
      const control = this.createSimpleControl(fb, field);

      group.addControl(field.name, control);
    });

    return group;
  }

  createSimpleControl(fb, field) {
    return fb.control(
      field.value,
      this.bindValidations(field.validations || [])
    );
  }
}
