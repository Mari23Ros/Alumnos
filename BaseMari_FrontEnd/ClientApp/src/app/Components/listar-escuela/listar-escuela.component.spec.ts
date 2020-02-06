import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEscuelaComponent } from './listar-escuela.component';

describe('ListarEscuelaComponent', () => {
  let component: ListarEscuelaComponent;
  let fixture: ComponentFixture<ListarEscuelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarEscuelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEscuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
