import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsEditCursoComponent } from './forms-edit-curso.component';

describe('FormsEditCursoComponent', () => {
  let component: FormsEditCursoComponent;
  let fixture: ComponentFixture<FormsEditCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsEditCursoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsEditCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
