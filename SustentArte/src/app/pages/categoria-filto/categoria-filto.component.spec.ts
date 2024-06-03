import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaFiltoComponent } from './categoria-filto.component';

describe('CategoriaFiltoComponent', () => {
  let component: CategoriaFiltoComponent;
  let fixture: ComponentFixture<CategoriaFiltoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaFiltoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriaFiltoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
