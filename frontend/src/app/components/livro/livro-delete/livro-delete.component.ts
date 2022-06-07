import { LivroService } from './../livro.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro.model';

@Component({
  selector: 'app-livro-delete',
  templateUrl: './livro-delete.component.html',
  styleUrls: ['./livro-delete.component.css']
})
export class LivroDeleteComponent implements OnInit {

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

  constructor(private LivroService: LivroService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.LivroService.readById(id).subscribe(livro => {
      this.livro = livro
    })

  }

  deleteLivro(){
    this.LivroService.delete(this.livro.id).subscribe(() => {
      this.LivroService.showMenssage('Livro Excluído com Sucesso!')
      this.router.navigate(['/livros'])
    })
  }

  cancel(): void{
    this.LivroService.showMenssage('Processo Cancelado!')
    this.router.navigate(['/livros'])
  }
}

