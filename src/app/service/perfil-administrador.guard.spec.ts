import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { perfilAdministradorGuard } from './perfil-administrador.guard';

describe('perfilAdministradorGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => perfilAdministradorGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
