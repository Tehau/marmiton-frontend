import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRouteSnapshot, Resolve  } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { RecipesService } from './recipes.service';

import 'rxjs/Rx';

@Injectable()
export class RecipesServiceResolver implements Resolve<any> {

	constructor(private recipesService: RecipesService) { 
	}

	resolve( route: ActivatedRouteSnapshot ): Observable<any> {
		return this.recipesService.getRecipeById(route.params);
	}
}
