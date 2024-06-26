import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerVendedorPublicoComponent } from './ver-vendedor-publico.component';

describe('VerVendedorPublicoComponent', () => {
  let component: VerVendedorPublicoComponent;
  let fixture: ComponentFixture<VerVendedorPublicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerVendedorPublicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerVendedorPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
