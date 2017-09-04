import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/Rx';

@Injectable()
export class RecipesService {

  	message$: Observable<string>;

	constructor(private http: Http) { 
	}

	public getAll() : Observable<any>{
		return this.http.get('http://localhost:3001/api/receipts')
	  		.map(res => res.json())
	  		.catch(error => {
	  			console.error(error);
	  			return Observable.throw(error);
	  		});
	}

	public getRecipeById(param) : Observable<any> {
		return this.http.get('http://localhost:3001/api/receipts/'+param.id)
	  		.map(res => res.json());
	}

	public create(param) : Observable<any>{
		return this.http.post('http://localhost:3001/api/receipts',param)
	  		.map(res => res.json());
	}

	public update(param) : Observable<any>{
		return this.http.put('http://localhost:3001/api/receipts/'+param.id,param)
	  		.map(res => res.json());
	}

	public deleteRecipeById (param) : Observable<any>{
		return this.http.delete('http://localhost:3001/api/receipts/'+param.id)
	  		.catch(error => {
	  			console.error(error);
	  			return Observable.throw(error);
	  		});
	}

}
