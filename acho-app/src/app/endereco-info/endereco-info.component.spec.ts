import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoInfoComponent } from './endereco-info.component';

describe('EnderecoInfoComponent', () => {
  let component: EnderecoInfoComponent;
  let fixture: ComponentFixture<EnderecoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnderecoInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnderecoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
