import { LikeFacade } from './../state/like.facade';
import { Component, OnInit, Input } from '@angular/core';
import { objLikes } from '../model/like.model';

@Component({
  selector: 'app-listando',
  templateUrl: './listando.component.html',
  styleUrls: ['./listando.component.css']
})
export class ListandoComponent implements OnInit {

  @Input() guardar: objLikes[] = [];

 // url = 'https://api.thedogapi.com/v1/images/search'


  constructor(private facade: LikeFacade) { }

  ngOnInit(): void {
    this.guardar = this.facade.formataLikes();
    
    
  }

}
