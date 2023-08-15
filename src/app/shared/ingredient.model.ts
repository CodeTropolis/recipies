// export class Ingredient {
//     constructor(public name:string, public amount:number){}
// }

// The above is short-hand for declaring vars and 
// assigning them in constructor body.
// Instead of:

// export class Ingredient {
//     public name: string;
//     public amount: string;

//     constructor(name:string, amount:number) {
//         this.name = name;
//         this.amount = amount
//     }
// }

export interface Ingredient {
    name: string,
    amount: number
}
