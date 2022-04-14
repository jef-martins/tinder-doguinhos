import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { Resposta } from "../model/like.model";

@Injectable({
    providedIn: 'root'
})

export class LikeState {
    imgs: any;
    

    breeds: BehaviorSubject<Resposta[]> = new BehaviorSubject<Resposta[]>([]) 
  


    constructor() { }

    get breedsCollection(): Resposta[] {
        return this.breeds.value;
    }

    get breedsCollection$():BehaviorSubject<Resposta[]> {
        return this.breeds;
    }

    set breedsCollection(value: Resposta[]) {
        this.breeds.next(value);

    }}
