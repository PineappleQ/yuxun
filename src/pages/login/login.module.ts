import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        LoginComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule {

}