import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAlumnoComponent } from './pagina-alumno.component';

describe('PaginaAlumnoComponent', () => {
  let component: PaginaAlumnoComponent;
  let fixture: ComponentFixture<PaginaAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
