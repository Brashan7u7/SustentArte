import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearArtesanoComponent } from './crear-artesano.component';

describe('CrearArtesanoComponent', () => {
  let component: CrearArtesanoComponent;
  let fixture: ComponentFixture<CrearArtesanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearArtesanoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearArtesanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
