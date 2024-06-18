import { ResolveFn } from '@angular/router';
import { CategoriaInterface } from '../../interfaces/categoria.interface';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { inject } from '@angular/core';

export const categoriasResolver: ResolveFn<Observable <Array<CategoriaInterface>>> = (route, state) => {
  const  apiService = inject(ApiService);
  return apiService.obtenerCategorias();
};
