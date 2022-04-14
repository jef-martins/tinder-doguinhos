export interface Resposta{

    breeds: Breeds[],
    height: number,
    id: string,
    url: string,
    width: number
}

export interface Breeds{
   
    bred_for: string;
    breed_group: string;
    height: Height;
    id: string;
    life_span: string,
    name: string;
    reference_image_id: string;
    temperament: string;
    weigth: Weight;

}

export interface Height{
    imperial: string,
    metric: string
}

export interface Weight{
    imperial: string,
    metric: string
}

export interface objLikes{
    like:string,
    url:string
  }

