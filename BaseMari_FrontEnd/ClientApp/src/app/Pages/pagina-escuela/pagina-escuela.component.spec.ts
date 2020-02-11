import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaEscuelaComponent } from './pagina-escuela.component';

describe('PaginaEscuelaComponent', () => {
  let component: PaginaEscuelaComponent;
  let fixture: ComponentFixture<PaginaEscuelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaEscuelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaEscuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
