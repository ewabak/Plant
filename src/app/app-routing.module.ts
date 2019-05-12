import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NewComponent } from "./new/new.component";
import { WateringComponent } from "./watering/watering.component";
import { CatalogComponent } from "./catalog/catalog.component";


const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "new", component: NewComponent},
    { path: "watering", component: WateringComponent},
    { path: "catalog", component: CatalogComponent}

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
