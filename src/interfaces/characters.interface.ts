export  interface Character{
    id: number,
    name: string,
    gender:string,
    species:string,
    status:string,
    episodes:string[],
    url:string
    location:Location,
    origin:Origin
}

export interface Location {
    name: string;
    url:string
  }
  
  export interface Origin {
    name: string;
    url:string
  }