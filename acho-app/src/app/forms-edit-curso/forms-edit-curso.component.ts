import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms-edit-curso',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './forms-edit-curso.component.html',
  styleUrls: ['./forms-edit-curso.component.scss']
})
export class FormsEditCursoComponent {
  curso = {
    nome: '',
    cnpj: '',
    cursosOferecidos: '',
    diasFuncionamento: '',
    horarioAtendimento: '',
    cep: '',
    estado: '',
    cidade: '',
    bairro: '',
    rua: '',
    numero: '',
    complemento: '',
    email: '',
    telefone: '',
    servicos: '',
    imagem: null as File | null 
  };

  imagemPreview: string | ArrayBuffer | null = null;

  // Função para abrir o seletor de arquivos
  selecionarImagem() {
    const fileInput = document.getElementById('imagemInput') as HTMLInputElement;
    fileInput.click();
  }

  // Função para capturar o arquivo selecionado
  onImageChange(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.curso.imagem = file;

      // Gerar preview da imagem
      const reader = new FileReader();
      reader.onload = () => {
        this.imagemPreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  // Função de envio do formulário
  onSubmit() {
    console.log('Dados do Curso:', this.curso);

    // Salvar no localStorage (opcional)
    localStorage.setItem('dadosCurso', JSON.stringify(this.curso));
    alert('Formulário enviado e salvo com sucesso!');
  }
}
