import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { SelectComponent } from './components/select/select.component';
import { DateComponent } from './components/date/date.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormService } from './services/dynamic-form.service';
import { InputModule } from '../input/input.module';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { FormRootComponent } from './components/form-root/form-root.component';
import { InputArrayComponent } from './components/input-array/input-array.component';


@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    FormGroupComponent,
    FormRootComponent,
    InputArrayComponent
  ],
  exports: [
    DynamicFormComponent,
    FormRootComponent
  ],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    DynamicFormComponent,
    InputArrayComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    InputModule,
  ],
  providers: [
    DynamicFormService,
  ]
})
export class DynamicFormsModule { }
