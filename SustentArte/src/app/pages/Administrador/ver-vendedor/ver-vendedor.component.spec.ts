import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerVendedorComponent } from './ver-vendedor.component';

describe('VerVendedorComponent', () => {
  let component: VerVendedorComponent;
  let fixture: ComponentFixture<VerVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerVendedorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
