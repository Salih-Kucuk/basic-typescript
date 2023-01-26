import { Product } from "./product";

export class SimpleDataSource {
    private products : Array<Product>;

    constructor(){
        this.products = new Array(
            new Product(1, "Ps2", "Console", 2000),
            new Product(2, "Ps3", "Console", 4000),
            new Product(3, "Ps4", "Console", 11000),
            new Product(4, "Ps5", "Console", 20000)
        );
    }

    getProducts() : Product[]{
        return this.products;
    }
}
