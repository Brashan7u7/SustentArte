import { inject } from '@angular/core';
import { ActivatedRoute, ResolveFn } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Observable, forkJoin } from 'rxjs';
import { ProductosInterface } from '../../interfaces/producto.interface';

export const productsResolver: ResolveFn< Observable <Array<ProductosInterface>>> = (route, state) => {

  const filterParam = route.queryParams['filter'];
  console.log('filterParam', filterParam);
  console.log(route, state);

  
  
  const  apiService = inject(ApiService);
  if (filterParam == 'default') {
    return apiService.obtenerProductos();
  }
  return apiService.obtenerProductosxCategorias(filterParam);
};
