import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerVendedorProductoComponent } from './ver-vendedor-producto.component';

describe('VerVendedorProductoComponent', () => {
  let component: VerVendedorProductoComponent;
  let fixture: ComponentFixture<VerVendedorProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerVendedorProductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerVendedorProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
