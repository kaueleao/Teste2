import { LivroService } from './../livro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro.model';


@Component({
  selector: 'app-livro-update',
  templateUrl: './livro-update.component.html',
  styleUrls: ['./livro-update.component.css']
})
export class LivroUpdateComponent implements OnInit {

  livro: Livro = {
    titulo: '',
    autor:'',
    editora: '',
    ano: 2000,
    edicao: '',
    idioma: '',
    categoria: '',
    isbn: '',
    CDD: '' ,
    estante: '' ,
    prateleira: '' ,
    observacoes: ''
  }

  constructor(private LivroService: LivroService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.LivroService.readById(id).subscribe(livro => {
      this.livro = livro
    });
  }

  updateLivro(): void {
    this.LivroService.update(this.livro).subscribe(() => {
      this.LivroService.showMenssage('Cadastro do Livro Atualizado com Sucesso!');
      this.router.navigate(["/livros"])
    })
  }

  cancel(): void{
    this.LivroService.showMenssage('Processo Cancelado!')
    this.router.navigate(['/livros'])
  }

  mensagem(): void{
    this.LivroService.showMenssage('ISBN Copiado!')
  }

}