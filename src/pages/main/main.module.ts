import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        MainComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule { }