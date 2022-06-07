import { LivroService } from './../livro.service';
import { Livro } from './../livro.model';
import { Component, OnInit } from '@angular/core';
import {CdkAccordionModule} from '@angular/cdk/accordion';

@Component({
  selector: 'app-livro-consulta',
  templateUrl: './livro-consulta.component.html',
  styleUrls: ['./livro-consulta.component.css']
})
export class LivroConsultaComponent implements OnInit {

  livros: Livro[] | undefined
  filter: any
  constructor(private livroService: LivroService) { }

ngOnInit(): void {
    
    this.livroService.read().subscribe(livros => {
      this.livros = livros
      console.log(livros)
    })
  }

limpar(){
  location.reload();
}

}