import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMaterialComponent } from './agregar-material.component';

describe('AgregarMaterialComponent', () => {
  let component: AgregarMaterialComponent;
  let fixture: ComponentFixture<AgregarMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarMaterialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
