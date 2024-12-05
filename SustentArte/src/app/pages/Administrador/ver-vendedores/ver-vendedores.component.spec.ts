import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerVendedoresComponent } from './ver-vendedores.component';

describe('VerVendedoresComponent', () => {
  let component: VerVendedoresComponent;
  let fixture: ComponentFixture<VerVendedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerVendedoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerVendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
