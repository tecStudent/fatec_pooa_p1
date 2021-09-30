import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Recomendacao } from '../recomendacao.model';

@Component({
  selector: 'recomendacao-inserir',
  templateUrl: './recomendacao-inserir.component.html',
  styleUrls: ['./recomendacao-inserir.component.css']
})
export class RecomendacaoInserirComponent {
  @Output() recomendacaoInserida = new EventEmitter<Recomendacao>()

  onAdicionarRecomendacao(form: NgForm){
    if(form.invalid) return
    const recomendacao: Recomendacao = {
    texto: form.value.texto
    }
    this.recomendacaoInserida.emit(recomendacao)
    
  }
}
