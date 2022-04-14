import { Breeds, Resposta } from './model/like.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class LikeApi {

    //url = 'http://dog.ceo/api/breeds/image/random/';
    url = 'https://api.thedogapi.com/v1/images/search';
    itens: Breeds[] = [];

    constructor(private http: HttpClient) { }

    selecionarImagem() {
       
        const response = this.http.get(this.url)
        return response;
    }

    mostrarInfos(){
        const response = this.http.get<Resposta[]>(this.url)
        return response;
    }


}
