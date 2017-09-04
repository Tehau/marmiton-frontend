import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListRecipeComponent } from './list-recipe/list-recipe.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipesService } from './recipes.service';
import { RecipesServiceResolver } from './recipes.service.resolver';
import { RecipeComponent } from './recipe/recipe.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListRecipeComponent,
    AddRecipeComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [RecipesService,RecipesServiceResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
