import { Livro } from './../livro.model';
import { LivroService } from './../livro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {

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

  constructor(private LivroService: LivroService,
    private router:Router ) { }

  ngOnInit(): void {
    
  }

  createLivro(): void {
    this.LivroService.create(this.livro).subscribe(()=> {
    this.LivroService.showMenssage('Livro Cadastrado com Sucesso!')
    this.LivroService.showMenssage
    this.router.navigate(['/livros'])
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
