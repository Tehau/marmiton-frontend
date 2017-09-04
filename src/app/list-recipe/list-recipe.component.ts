import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Subscriber, Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.less']
})
export class ListRecipeComponent implements OnInit, OnDestroy {
	private recipes 
	private _getAllSubscribe : Subscriber<any>;
	private _deleteSubscribe : Subscriber<any>;
	private $recipes : Observable<any>;
	constructor( private recipesService: RecipesService ) {
	}

	ngOnInit() {
		/*this.recipes = this.recipesService.getAll();*/
		this.getAllRecipe();
	}

	ngOnDestroy() {
		// this._deleteSubscribe.unsubscribe;
		// this._getAllSubscribe.unsubscribe;
	}

	private getAllRecipe() {
		this.$recipes = this.recipesService.getAll();
	}

	private getRecipe(id) {
		this.recipesService.getRecipeById({id:id})
			.subscribe(data => console.log(data));
	}

	private deleteRecipe(id) {
		this.recipesService.deleteRecipeById({id:id})
			.subscribe((data) => {
				this.getAllRecipe()
			});
	}
}
