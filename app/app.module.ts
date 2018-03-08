import {NativeScriptHttpClientModule} from "nativescript-angular/http-client";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import {LandingPageComponent} from "./components/landingPage.component";
import {RecipesResultsComponent} from "./components/recipesResults.component";
import {RecipesGenerateFormComponent} from "./components/recipesGenerateForm.component";
import {BPFormComponent} from "./components/bpForm.component";
import {BPChartComponent} from "./components/bpChart.component";
import {HealthInfoComponent} from "./components/healthInfo.component";
import {UserProfileComponent} from "./components/userProfile.component";
import { AccordionModule } from "nativescript-accordion/angular";
import { MedicalHistoryComponent } from "./components/medicalHistory.component";
import { NativeScriptUIDataFormModule } from "nativescript-pro-ui/dataform/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { CustomRecipeComponent } from "./components/customRecipe.component";

import { SpoonacularService } from "./services/spoonacular.service";
import { FirebaseRecipeService } from "./services/firebaseRecipe.service";
import { FirebaseUserService } from "./services/firebaseUser.service";
import { NativeScriptUIChartModule } from "nativescript-pro-ui/chart/angular";
import {UserCardComponent} from "./components/userCard.component";
import { FoodCardComponent} from "./components/foodCard.component";
import { RatingRecipeComponent} from "./components/ratingPage.component";
import { CommentingRecipeComponent} from "./components/commentPage.component";
import {RecipesListComponent} from "./components/recipesList.component";
import {RecipeDetailsComponent} from "./components/recipeDetails.component";
import {AddToRecipeListComponent} from "./components/addToRecipeList.component";

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
        NativeScriptUIDataFormModule,
        NativeScriptFormsModule,
        AccordionModule,
        NativeScriptUIChartModule
    ],
    declarations: [
        AppComponent,
        LandingPageComponent,
        RecipesResultsComponent,
        RecipesGenerateFormComponent,
        BPFormComponent,
        BPChartComponent,
        HealthInfoComponent,
        UserProfileComponent,
        MedicalHistoryComponent,
        FoodCardComponent,
        RatingRecipeComponent,
        CommentingRecipeComponent,
        UserCardComponent,
        CustomRecipeComponent,
        RecipesListComponent,
        RecipeDetailsComponent,
        AddToRecipeListComponent
    ],
    providers: [
        SpoonacularService,
        FirebaseRecipeService,
        FirebaseUserService,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
