import { Injectable } from "@angular/core";
import { LikeApi } from "../like.api";
import { objLikes } from "../model/like.model";
import { LikeState } from './like.state';

@Injectable({
    providedIn: 'root'
})
export class LikeFacade {

    public img: any //= this.state.imgs;
    breeds$ = this.state.breeds;

    constructor(

        private state: LikeState,
        private api: LikeApi
    ) { }


    getImagens() {
        return this.api.selecionarImagem()
    }

    getInfos() {
        this.api.mostrarInfos().subscribe((res => {
            this.state.breedsCollection = res;
        }))
    }


    formataLikes() {
        
        let guardar: objLikes[] = [];
        const aqui = localStorage.getItem('likes') || ''
        const a = localStorage.getItem('likes')?.replace('[', '') || '';
        const b = a.replace(']', '');
        const c = b.replace(/},/g, '}*');
        aqui != '' ? guardar = c.split('*').map(val => JSON.parse(val)) : '';

        return guardar;
    }

}