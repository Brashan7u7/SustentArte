import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCompradorComponent } from './editar-comprador.component';

describe('EditarCompradorComponent', () => {
  let component: EditarCompradorComponent;
  let fixture: ComponentFixture<EditarCompradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarCompradorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarCompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
