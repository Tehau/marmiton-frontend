/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecipesServiceResolver } from './recipes.service.resolver';

describe('RecipesServiceResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipesService]
    });
  });

  it('should ...', inject([RecipesService], (service: RecipesService) => {
    expect(service).toBeTruthy();
  }));
});
