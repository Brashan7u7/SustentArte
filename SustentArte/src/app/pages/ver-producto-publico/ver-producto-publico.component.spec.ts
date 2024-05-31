import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerProductoPublicoComponent } from './ver-producto-publico.component';

describe('VerProductoPublicoComponent', () => {
  let component: VerProductoPublicoComponent;
  let fixture: ComponentFixture<VerProductoPublicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerProductoPublicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerProductoPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
