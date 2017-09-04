import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { NgForm } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { appConstant } from '../app.constants';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.less']
})
export class AddRecipeComponent implements OnInit {
	private recipe : any
	private listUnity : Array<String>
	constructor( private recipesService: RecipesService, private activatedRoute:ActivatedRoute, private router:Router) { 
	}

	ngOnInit() {
		this.activatedRoute.data.subscribe((data:{recipe:any}) => {
			console.log(data.recipe);
	        this.recipe = data.recipe;
      	});
      	if(!this.recipe) {
			this.recipe = {
							'title':'',
							'description':'',
							'portion':0,
							'ingredients':[{
								'name': '',
								'quantity': '',
								'unity': ''
							}],
							'step':[{
								'description': ''
							}]
						}
		}
		this.listUnity = appConstant.getListUnity;
	}

	private addStep(){
		this.recipe.step.push({description:''});
	}

	private removeStep(index){
		this.recipe.step.splice(index,1);
	}

	private removeIngredient(index){
		this.recipe.ingredients.splice(index,1);
	}

	private addIngredient(){
		this.recipe.ingredients.push({
							'name': '',
							'quantity': '',
							'unity': ''
						});
	}

	private onSubmit(form:NgForm) {
		console.log('0');
		if(!this.recipe.id){
			console.log('1');
			this.recipesService.create(this.recipe).subscribe( data =>{
				this.router.navigate(['']);
			});
		} else {
			console.log('2');
			this.recipesService.update(this.recipe).subscribe( data =>{
				this.router.navigate(['']);
			});
		}
	}
}
