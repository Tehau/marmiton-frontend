import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RecipesService } from '../recipes.service';

@Component({
	selector: 'app-recipe',
	templateUrl: './recipe.component.html',
	styleUrls: ['./recipe.component.less']
})
export class RecipeComponent implements OnInit {
	private recipe
	private initialPortion : Number
	constructor(private recipesService:RecipesService, private activatedRoute:ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe((data:{recipe:any}) => {
	        this.recipe = data.recipe;
	        this.initialPortion = data.recipe.portion;
      	});
	}

}