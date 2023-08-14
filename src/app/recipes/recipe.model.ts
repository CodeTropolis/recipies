export class Recipe { // Or export interface Recipe. Using class as per lesson for now.
    public name: string
    public description: string
    public imagePath: string


    constructor(name:string, description:string, imagePath:string){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }

}