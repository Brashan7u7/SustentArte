import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { AlertsService } from '../../../services/alerts.service';
import { CategoriaInterface } from '../../../interfaces/categoria.interface';
import { MaterialesInterface } from '../../../interfaces/materiales.interface';
import { ProductosInterface } from '../../../interfaces/producto.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-producto',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule], // Only CommonModule is needed
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent {
  isNew = true;
  id = 0;
  formBuilder = inject(FormBuilder);
  route = inject(Router);
  alertService = inject(AlertsService);
  apiService2 = inject(ApiService);
  activeRoute = inject(ActivatedRoute);
  productoForm!: FormGroup;
  idArtesano: number = Number(sessionStorage.getItem('id_artesano'));
  Idcategoria?: number;
  Idmaterial?: number;
  categorias = Array<CategoriaInterface>();
  materiales = Array<MaterialesInterface>();

  selecCategoria(categoria?: number) {
    this.Idcategoria = categoria;
  }
  selecMaterial(material?: number) {
    this.Idmaterial = material;
  }


  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.apiService.obtenerMateriales().subscribe((res) => {
      this.materiales = res;
    });
    this.apiService.obtenerCategorias().subscribe((res) => {
      this.categorias = res;
    });
    this.productoForm = this.formBuilder.group({
      nombreP: ['', Validators.required],
      descripcion: ['', Validators.required],
      imagen: ['', Validators.required],
      precio_Venta: ['', Validators.required],
      stock: [1, [Validators.required, Validators.min(1)]],
      historia: ['', Validators.required],
      artesanoId: ['', Validators.required],
      materialesId: ['', Validators.required],
      categoriaId: ['', Validators.required]
    });
    this.activeRoute.params.subscribe((params: any) => {
      console.log(params);
      if (params.id) {
        this.id = params.id;
        this.isNew = false;
        this.apiService.obtenerProducto(this.id).subscribe((producto) => {
          console.log(producto);

          this.productoForm.reset(producto);
          console.log(producto.materiales); // Verificar si materiales está definido
          console.log(producto.categoria); // Verificar si categoria está definido

          if (producto.materiales && producto.categoria) {
            this.productoForm.patchValue({ materialesId: producto.materiales.id_material });
            this.productoForm.patchValue({ categoriaId: producto.categoria.id_categoria });
          }
        })
      }
    })
  }

  async showConfirmationAlert(title: string, text: string): Promise<boolean> {
    const result = await Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    });
    return result.isConfirmed;
  }

  agregarProducto() {
    this.productoForm.patchValue({ artesanoId: this.idArtesano });

    if (this.productoForm.invalid) {
      return console.error(this.productoForm.value);
    }
    if (this.isNew) {
      this.productoForm.patchValue({ materialesId: this.Idmaterial });
      this.productoForm.patchValue({ categoriaId: this.Idcategoria });
      const formProduct = this.productoForm.value as ProductosInterface;
      this.apiService.agregarProducto(formProduct).subscribe(data => {
        console.log(data)
        this.productoForm.reset();
        this.alertService.alert('Producto creado', 'success');
        this.route.navigateByUrl('panelVendedor');
      })
    } else {
      this.apiService.editarProducto(this.productoForm.value, this.id).subscribe(data => {
        console.log(data);
        this.productoForm.reset();
        this.alertService.alert('Producto editado', 'success');
        this.route.navigateByUrl('misProductosVendedor')
      })
    }
  }
}
