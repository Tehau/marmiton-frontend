import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListRecipeComponent } from './list-recipe/list-recipe.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipesServiceResolver } from './recipes.service.resolver';
const routes: Routes = [
  {
    path: '',
    component: ListRecipeComponent
  },
  {
  	path: 'add',
  	component: AddRecipeComponent
  },
  {
    path: 'recipe/:id',
    component: RecipeComponent,
    resolve: {recipe : RecipesServiceResolver}
  },
  {
    path: 'modify/:id',
    component: AddRecipeComponent,
    resolve: {recipe : RecipesServiceResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
