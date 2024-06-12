import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoPrivadoComponent } from './producto-privado.component';

describe('ProductoPrivadoComponent', () => {
  let component: ProductoPrivadoComponent;
  let fixture: ComponentFixture<ProductoPrivadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoPrivadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductoPrivadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
