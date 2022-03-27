 export class ProductModel {
    static incr:number = 0;
    id:number;
    name:string;
    price:number;
    quantity:number;


     constructor(body: {name: string, price: number, quantity: number}) {
         this.id = ++ProductModel.incr;
         this.name = body.name;
         this.price = body.price;
         this.quantity = body.quantity;
     }
 }