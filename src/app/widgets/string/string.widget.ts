import { Component } from '@angular/core';
import { StringWidget } from 'ngx-schema-form';

@Component({
    selector: 'string-widget',
    templateUrl: './string.widget.html'
})
export class MatStringWidget extends StringWidget { }