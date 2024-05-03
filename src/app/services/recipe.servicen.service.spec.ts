import { TestBed } from '@angular/core/testing';

import { RecipeServicenService } from './recipe.servicen.service';

describe('RecipeServicenService', () => {
  let service: RecipeServicenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeServicenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
