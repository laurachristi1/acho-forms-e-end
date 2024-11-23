import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoSemInfoComponent } from './endereco-sem-info.component';

describe('EnderecoSemInfoComponent', () => {
  let component: EnderecoSemInfoComponent;
  let fixture: ComponentFixture<EnderecoSemInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnderecoSemInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnderecoSemInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
