import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
// import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AlertComponent } from './alert/alert.component';
import { DialogModule } from './dialog/dialog.module';
import { ExampleComponent } from './example/example.component';
import { DynamicFormsModule } from './dynamic-forms/dynamic-forms.module';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    // InputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    MaterialModule,
    FormsModule,
    DialogModule,

    DynamicFormsModule,
  ],
  entryComponents: [
    ExampleComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
