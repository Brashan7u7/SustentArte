import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagarProductosComponent } from './pagar-productos.component';

describe('PagarProductosComponent', () => {
  let component: PagarProductosComponent;
  let fixture: ComponentFixture<PagarProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagarProductosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagarProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
