import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NewComponent } from './new/new.component';
import { WateringComponent } from './watering/watering.component';
import { CatalogComponent } from './catalog/catalog.component';

import { HttpClientModule } from "@angular/common/http";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        NewComponent,
        WateringComponent,
        CatalogComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
