import { LikeApi } from './../like.api';
import { Breeds, objLikes, Resposta } from './../model/like.model';
import { LikeFacade } from './../state/like.facade';
import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {

  @Input() itens: Breeds[] = [];
  infos: Resposta[] = [];
  @Input() guardar: objLikes[] =[];
  


  constructor(public facade: LikeFacade, public api: LikeApi, private router: Router) { }

  ngOnInit(): void {
    this.facade.getInfos()
    this.facade.breeds$.subscribe((val) => {
      this.infos = val;
      console.log(val);
    })
  }

  // xis(): void { //quando clicado pergunta e após confirmar atualiza a pagina
  //   const confirmarNao = confirm("Confirmar 'Não'?");
  //   if (confirmarNao) {
  //     setTimeout("location.reload(true);", 100);
  //   }
  // }

  xis(url: string): void {
    setTimeout("location.reload(true);", 50);
    this.guardarLikes({"like": 'xis', "url": url});
  }

  star(url: string) { //após o click atualiza a página
    setTimeout("location.reload(true);", 50);
    this.guardarLikes({"like": 'star', "url": url});
  }

  heart(url: string) {
    setTimeout("location.reload(true);", 50);
    this.guardarLikes({"like": 'heart', "url": url});
  }

  guardarLikes(like: any){
    console.log(like)
    this.guardar = this.facade.formataLikes();
  
    this.guardar.push(like);
  
    localStorage.setItem('likes', JSON.stringify(this.guardar));
  }

  verLikes(){
    console.log(localStorage.getItem('likes'));
    this.router.navigate(["listando"])
    
  }


}

