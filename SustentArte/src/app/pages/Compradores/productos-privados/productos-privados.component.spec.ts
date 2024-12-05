import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosPrivadosComponent } from './productos-privados.component';

describe('ProductosPrivadosComponent', () => {
  let component: ProductosPrivadosComponent;
  let fixture: ComponentFixture<ProductosPrivadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosPrivadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductosPrivadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
