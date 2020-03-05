import { Directive ,ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appTarefaConcluda]'
})
export class TarefaConcludaDirective  implements OnInit{
@Input() tarefaConcluida:boolean;
  constructor(private el:ElmentRef) { }

  ngOnInit(){
  	if(this.tarefaConcluida){
  		this.el.nativeElement.style.textDecoration = "line-through";
  	}
  }
}
