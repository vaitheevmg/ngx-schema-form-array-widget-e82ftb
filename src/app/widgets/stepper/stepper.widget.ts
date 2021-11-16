import { Component } from '@angular/core';

import { ObjectLayoutWidget } from 'ngx-schema-form';

@Component({
  selector: 'sf-form-stepper',
  templateUrl: './stepper.widget.html'
})
export class StepperWidget extends ObjectLayoutWidget {

  constructor() 
  {
    super();
    console.log(this.schema)
  }
 }