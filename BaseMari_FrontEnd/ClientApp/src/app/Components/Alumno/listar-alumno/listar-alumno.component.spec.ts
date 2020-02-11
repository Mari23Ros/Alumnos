import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAlumnoComponent } from './listar-alumno.component';

describe('ListarAlumnoComponent', () => {
  let component: ListarAlumnoComponent;
  let fixture: ComponentFixture<ListarAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
