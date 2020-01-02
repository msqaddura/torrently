import { TestBed } from '@angular/core/testing';

import { MoviesClientService } from './movies-client.service';

describe('MoviesClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesClientService = TestBed.get(MoviesClientService);
    expect(service).toBeTruthy();
  });
});
