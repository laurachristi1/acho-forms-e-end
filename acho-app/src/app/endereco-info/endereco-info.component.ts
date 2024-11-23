import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-endereco-info',
  templateUrl: './endereco-info.component.html',
  styleUrls: ['./endereco-info.component.scss'],
})
export class EnderecoInfoComponent {
  constructor(private router: Router) {}

  voltarParaEnderecoSemInfo() {
    this.router.navigate(['/endereco-sem-info']);
  }
}
