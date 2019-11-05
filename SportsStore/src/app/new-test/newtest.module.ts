import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { NewTestComponent } from "./new-test.component";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    declarations: [NewTestComponent],
    exports: [NewTestComponent]
})
export class NewTestModule { }
