import { Component } from "@angular/core";

import { ArrayWidget, FormProperty } from "ngx-schema-form";

@Component({
  selector: "sf-array-widget",
  templateUrl: "./array.widget.html"
})
export class MatArrayWidget extends ArrayWidget {
  step = 0;
  // buttonDisabledAdd: boolean;
  // buttonDisabledRemove: boolean;

  addItem() {
    // this.formProperty.addItem();
    // this.updateButtonDisabledState();
    this.step = +this.formProperty.properties.length;
    super.addItem();
  }

  // removeItem(item: FormProperty) {
  //   this.formProperty.removeItem(item);
  //   this.updateButtonDisabledState();
  // }

  // trackByIndex(index: number, item: any) {
  //   return index;
  // }

  // updateButtonDisabledState() {
  //   this.buttonDisabledAdd = this.isAddButtonDisabled();
  //   this.buttonDisabledRemove = this.isRemoveButtonDisabled();
  // }
  // isAddButtonDisabled() {
  //   if (
  //     this.schema.hasOwnProperty("maxItems") &&
  //     Array.isArray(this.formProperty.properties)
  //   ) {
  //     if (this.formProperty.properties.length >= this.schema.maxItems) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  // isRemoveButtonDisabled() {
  //   if (
  //     this.schema.hasOwnProperty("minItems") &&
  //     Array.isArray(this.formProperty.properties)
  //   ) {
  //     if (this.formProperty.properties.length <= this.schema.minItems) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }
}
