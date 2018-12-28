
import { Validators } from '@angular/forms';
import { FieldConfig } from './dynamic-forms/field.interface';

export const RegConfig: FieldConfig[] = [
  {
    type: 'array',
    label: 'Country',
    inputType: 'text',
    name: 'countries',
    fields: [{
        type: 'input',
        label: 'Country',
        inputType: 'text',
        name: 'country',
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Name Required'
          },
          {
            name: 'pattern',
            validator: Validators.pattern('^[a-zA-Z]+$'),
            message: 'Accept only text'
          }
        ]
      }],
  },
  {
    type: 'array',
    label: 'Age',
    inputType: 'text',
    name: 'ages',
    fields: [{
      type: 'radiobutton',
      label: 'Gender',
      name: 'gender',
      options: ['Male', 'Female'],
      value: 'Male'
    }],
  },
  {
    type: 'array',
    label: 'Phone',
    inputType: 'text',
    name: 'phones',
    values: [{
      phone1: 'test',
      phone2: 'test2',
    }],
    fields: [{
        type: 'input',
        label: 'UserPhone1',
        inputType: 'text',
        name: 'phone1',
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Name Required'
          },
          {
            name: 'pattern',
            validator: Validators.pattern('^[a-zA-Z]+$'),
            message: 'Accept only text'
          }
        ]
      },
        {
          type: 'input',
          label: 'UserPhone2',
          inputType: 'text',
          name: 'phone2',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'Name Required'
            },
            {
              name: 'pattern',
              validator: Validators.pattern('^[a-zA-Z]+$'),
              message: 'Accept only text'
            }
          ]
        }],
    // fields: [{
    //     type: 'input',
    //     label: 'UserPhone1',
    //     inputType: 'text',
    //     name: 'phone1',
    //     validations: [
    //       {
    //         name: 'required',
    //         validator: Validators.required,
    //         message: 'Name Required'
    //       },
    //       {
    //         name: 'pattern',
    //         validator: Validators.pattern('^[a-zA-Z]+$'),
    //         message: 'Accept only text'
    //       }
    //     ]
    //   },
    //   {
    //     type: 'input',
    //     label: 'UserPhone2',
    //     inputType: 'text',
    //     name: 'phone2',
    //     validations: [
    //       {
    //         name: 'required',
    //         validator: Validators.required,
    //         message: 'Name Required'
    //       },
    //       {
    //         name: 'pattern',
    //         validator: Validators.pattern('^[a-zA-Z]+$'),
    //         message: 'Accept only text'
    //       }
    //     ]
    //   }
    // ]
  },
  {
    type: 'input',
    label: 'Username',
    inputType: 'text',
    name: 'name',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Name Required'
      },
      {
        name: 'pattern',
        validator: Validators.pattern('^[a-zA-Z]+$'),
        message: 'Accept only text'
      }
    ]
  },

  {
    type: 'formGroup',
    label: 'Address',
    name: 'address',
    children: [
      {
        type: 'input',
        label: 'Address1',
        inputType: 'text',
        name: 'Address1',
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Name Required'
          },
          {
            name: 'pattern',
            validator: Validators.pattern('^[a-zA-Z]+$'),
            message: 'Accept only text'
          }
        ]
      },
      {
        type: 'input',
        label: 'Address 2',
        inputType: 'text',
        name: 'Address2',
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Name Required'
          },
          {
            name: 'pattern',
            validator: Validators.pattern('^[a-zA-Z]+$'),
            message: 'Accept only text'
          }
        ]
      },      {
        type: 'formGroup',
        label: 'Cities',
        name: 'cities',
        children: [
              {
                type: 'input',
                label: 'Address1',
                inputType: 'text',
                name: 'Address1',
                validations: [
                  {
                    name: 'required',
                    validator: Validators.required,
                    message: 'Name Required'
                  },
                  {
                    name: 'pattern',
                    validator: Validators.pattern('^[a-zA-Z]+$'),
                    message: 'Accept only text'
                  }
                ]
              },
              {
                type: 'input',
                label: 'Address 2',
                inputType: 'text',
                name: 'Address2',
                validations: [
                  {
                    name: 'required',
                    validator: Validators.required,
                    message: 'Name Required'
                  },
                  {
                    name: 'pattern',
                    validator: Validators.pattern('^[a-zA-Z]+$'),
                    message: 'Accept only text'
                  }
                ]
          },
        ]
      },
    ]
  },



  {
    type: 'input',
    label: 'Email Address',
    inputType: 'email',
    name: 'email',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Email Required'
      },
      {
        name: 'pattern',
        validator: Validators.pattern(
          '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
        ),
        message: 'Invalid email'
      }
    ]
  },
  {
    type: 'input',
    label: 'Password',
    inputType: 'password',
    name: 'password',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Password Required'
      }
    ]
  },
  {
    type: 'radiobutton',
    label: 'Gender',
    name: 'gender',
    options: ['Male', 'Female'],
    value: 'Male'
  },
  {
    type: 'date',
    label: 'DOB',
    name: 'dob',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Date of Birth Required'
      }
    ]
  },
  {
    type: 'select',
    label: 'Country',
    name: 'country',
    value: 'UK',
    options: ['India', 'UAE', 'UK', 'US'],
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Date of Birth Required'
      }
    ]
  },
  {
    type: 'checkbox',
    label: 'Accept Terms',
    name: 'term',
    value: true
  },
  {
    type: 'checkbox',
    label: 'Drink Terms',
    name: 'drink',
    value: false
  },
  {
    type: 'checkbox',
    label: 'agree',
    name: 'age',
    value: false
  },
  // {
  //   type: 'button',
  //   label: 'Save'
  // },
  // {
  //   type: 'button',
  //   label: 'My save'
  // }
];
