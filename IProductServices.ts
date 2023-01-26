import { Product } from "./product";

export interface IProductServices{
    getById(id: number): Product;
    getProducts(): Array<Product>;
    saveProducts(product: Product): void;
    deleteProducts(product: Product): void;
}