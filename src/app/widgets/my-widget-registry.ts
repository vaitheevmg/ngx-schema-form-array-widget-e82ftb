import {DefaultWidgetRegistry, StringWidget} from 'ngx-schema-form';

import {StepperWidget} from './stepper/stepper.widget';
import { MatArrayWidget } from './array/array.widget';
import { MatStringWidget } from './string/string.widget';

export class MyWidgetRegistry extends DefaultWidgetRegistry {
  constructor() {
    super();

    this.register('stepper', StepperWidget);
    this.register('array', MatArrayWidget);
    this.register('string', MatStringWidget);
  }
}