import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-endereco-sem-info',
  templateUrl: './endereco-sem-info.component.html',
  styleUrls: ['./endereco-sem-info.component.scss'],
})
export class EnderecoSemInfoComponent {
  constructor(private router: Router) {}

  adicionarEndereco() {
    this.router.navigate(['/endereco-info']);
  }
}
