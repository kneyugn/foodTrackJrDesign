import {NativeScriptHttpClientModule} from "nativescript-angular/http-client";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import {SpoonacularService} from "./services/spoonacular.service";
import {LandingPageComponent} from "./components/landingPage.component";
import {RecipesResultsComponent} from "./components/recipesResults.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import {RecipesGenerateFormComponent} from "./components/recipesGenerateForm.component";
import {BPFormComponent} from "./components/bpForm.component";
import {BPChartComponent} from "./components/bpChart.component";
import {HealthInfoComponent} from "./components/healthInfo.component";
import {UserProfileComponent} from "./components/userProfile.component";
import { AccordionModule } from "nativescript-accordion/angular";

import {Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef} from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import {EventData, Observable} from "tns-core-modules/data/observable";
import {SearchBar} from "tns-core-modules/ui/search-bar";
import {RouterExtensions} from "nativescript-angular";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-pro-ui/sidedrawer';
import { ObservableArray } from "tns-core-modules/data/observable-array";
import * as htmlViewModule from "tns-core-modules/ui/html-view";
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular";
import { SIDEDRAWER_DIRECTIVES } from 'nativescript-pro-ui/sidedrawer/angular';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptHttpClientModule,
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUISideDrawerModule,

    ],
    declarations: [
        AppComponent,
        LandingPageComponent,
        RecipesResultsComponent,
        RecipesGenerateFormComponent,
        BPFormComponent,
        BPChartComponent,
        HealthInfoComponent,
        UserProfileComponent
    ],
    providers: [
        SpoonacularService,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
