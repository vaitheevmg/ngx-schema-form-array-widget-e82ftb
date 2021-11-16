import "./polyfills";

import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { DemoMaterialModule } from "./app/material-module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import {
  SchemaFormModule,
  SchemaValidatorFactory,
  ZSchemaValidatorFactory,
  TemplateSchemaModule,
  WidgetRegistry
} from "ngx-schema-form";
import { JsonSchemaExampleComponent } from "./app/ngx-schema-form.component";
import { MyWidgetRegistry } from "./app/widgets/my-widget-registry";
import { StepperWidget } from "./app/widgets/stepper/stepper.widget";
import { MatArrayWidget } from "./app/widgets/array/array.widget";
import { MatStringWidget } from "./app/widgets/string/string.widget";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    NgbModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    SchemaFormModule.forRoot(),
    TemplateSchemaModule
  ],
  entryComponents: [
    JsonSchemaExampleComponent,
    StepperWidget,
    MatArrayWidget,
    MatStringWidget
  ],
  declarations: [
    JsonSchemaExampleComponent,
    StepperWidget,
    MatArrayWidget,
    MatStringWidget
  ],
  bootstrap: [JsonSchemaExampleComponent],
  providers: [
    { provide: WidgetRegistry, useClass: MyWidgetRegistry },
    {
      provide: SchemaValidatorFactory,
      useClass: ZSchemaValidatorFactory
    }
  ]
})
export class AppModule {}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
